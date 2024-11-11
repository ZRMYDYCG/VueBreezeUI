import { onMounted, onUnmounted } from 'vue'

/**
 * @description: useEventListener
 * @param target 目标元素对象, 可以是 DOM 元素或其它支持被监听的对象
 * @param event 要监听的事件名称
 * @param callback 事件被触发时执行的回调函数
 * */
export function useEventListener(
  target: HTMLElement | Window | Document,
  event: string,
  callback: Function
): void {
  onMounted(() => target.addEventListener(event, callback as EventListenerOrEventListenerObject))
  onUnmounted(() =>
    target.removeEventListener(event, callback as EventListenerOrEventListenerObject)
  )
}
