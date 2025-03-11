import { mount, flushPromises } from '@vue/test-utils'
import BreDrawer from './BreDrawer.vue'
import { nextTick } from 'vue'
import { describe, it, vi, expect } from 'vitest'

describe('BreDrawer', () => {
  it('should open and close with modelValue', async () => {
    const wrapper = mount(BreDrawer, {
      props: {
        modelValue: false,
        openDelay: 10,
        closeDelay: 10
      }
    })

    await wrapper.setProps({ modelValue: true })
    await flushPromises()
    expect(wrapper.emitted().open).toBeTruthy()

    await wrapper.setProps({ modelValue: false })
    await flushPromises()
    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should call beforeClose before closing', async () => {
    const beforeClose = vi.fn()
    const wrapper = mount(BreDrawer, {
      props: {
        modelValue: true,
        beforeClose
      }
    })

    await wrapper.find('.bre-drawer__close').trigger('click')
    expect(beforeClose).toHaveBeenCalled()
  })

  it('should lock scroll when opened', async () => {
    await nextTick()
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should render in body when appendToBody', async () => {
    await nextTick()
    expect(document.body.querySelector('.bre-drawer')).toBeTruthy()
  })

  it('should handle different directions', async () => {
    const wrapper = mount(BreDrawer, {
      props: {
        modelValue: true,
        direction: 'ttb'
      }
    })

    expect(wrapper.find('.direction-ttb').exists()).toBe(true)
  })
})
