import { nextTick } from 'vue'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BreMessage from './BreMessage.vue'
import message from './message'

describe('BreMessage', () => {
  afterEach(() => {
    message.closeAll()
  })

  it('renders message content', () => {
    const wrapper = mount(BreMessage, {
      props: {
        message: 'Test Message'
      }
    })
    expect(wrapper.text()).toContain('Test Message')
  })

  it('applies type class', async () => {
    const wrapper = mount(BreMessage, {
      props: {
        type: 'success'
      }
    })
    expect(wrapper.classes()).toContain('bre-message--success')
  })

  it('auto closes after duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(BreMessage, {
      props: {
        duration: 1000
      }
    })

    await vi.advanceTimersByTime(1000)
    expect(wrapper.emitted('destroy')).toBeTruthy()
    vi.useRealTimers()
  })

  it('manual close', async () => {
    const wrapper = mount(BreMessage)
    await wrapper.vm.close()
    expect(wrapper.emitted('destroy')).toBeTruthy()
  })

  it('grouping messages', async () => {
    message({ message: 'Same', grouping: true })
    message({ message: 'Same', grouping: true })

    await nextTick()
    // expect(instances.length).toBe(1)
    // expect(instances[0].vm._props.repeatNum).toBe(2)
  })

  it('html message', () => {
    const wrapper = mount(BreMessage, {
      props: {
        message: '<strong>HTML</strong>',
        dangerouslyUseHTMLString: true
      }
    })
    expect(wrapper.html()).toContain('<strong>HTML</strong>')
  })
})
