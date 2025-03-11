import { createApp, h, type App, type Component } from 'vue'
import BreMessage from './Message.vue'
import type { MessageProps, MessageType } from './interface.ts'

type MessageParams = Partial<MessageProps> | string
type MessageInstance = {
  vm: App
  close: () => void
  id: string
  props: MessageProps // 显式存储 props 副本
}

let instances: MessageInstance[] = []
let seed = 1

// 增强类型定义
interface MessageHandler {
  close: () => void
}

interface MessageFn {
  (options: MessageParams): MessageHandler
  success: (options: MessageParams) => MessageHandler
  warning: (options: MessageParams) => MessageHandler
  info: (options: MessageParams) => MessageHandler
  error: (options: MessageParams) => MessageHandler
  closeAll: () => void
}

const createMessage = (options: MessageParams): MessageHandler => {
  if (typeof options === 'string') {
    options = { message: options }
  }

  const id = `message_${seed++}`
  const container = document.createElement('div')

  const props: any = {
    ...options,
    onClose: () => close(id),
    repeatNum: 1
  }

  // 分组逻辑使用显式存储的 props
  if (props.grouping) {
    const exist = instances.find(
      (inst) => inst.props.message === props.message && inst.props.type === props.type
    )
    if (exist) {
      exist.props.repeatNum!++
      // 需要手动更新组件，这里简化处理直接重新挂载
      exist.vm.unmount()
      exist.vm = createAppWrapper(exist.props, id)
      document.body.appendChild(container)
      exist.vm.mount(container)
      return exist
    }
  }

  const vm = createAppWrapper(props, id)

  const instance: MessageInstance = {
    vm,
    close: () => {
      vm.unmount()
      document.body.removeChild(container)
    },
    id,
    props
  }

  document.body.appendChild(container)
  vm.mount(container)
  instances.push(instance)
  return instance
}

// 创建 Vue 实例的封装函数
const createAppWrapper = (props: MessageProps, id: string) => {
  return createApp({
    render() {
      return h(BreMessage as Component, {
        ...props,
        key: id,
        onClose: () => close(id)
      })
    }
  })
}

const close = (id: string) => {
  const index = instances.findIndex((inst) => inst.id === id)
  if (index === -1) return

  const instance = instances[index]
  instance.close()
  instances.splice(index, 1)
}

const message = ((options: MessageParams) => {
  return createMessage(options)
}) as MessageFn

const types: MessageType[] = ['success', 'warning', 'info', 'error']
types.forEach((type) => {
  message[type] = (options: MessageParams) => {
    if (typeof options === 'string') {
      return createMessage({ type, message: options })
    }
    return createMessage({ ...options, type })
  }
})

message.closeAll = () => {
  instances.forEach((instance) => instance.close())
  instances = []
}

export default message
