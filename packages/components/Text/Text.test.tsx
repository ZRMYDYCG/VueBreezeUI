import { mount } from '@vue/test-utils'
import BreText from './BreText.vue'
import { describe, it, expect } from 'vitest'

describe('BreText', () => {
  it('renders default tag', () => {
    const wrapper = mount(BreText)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders custom tag', () => {
    const wrapper = mount(BreText, { props: { tag: 'div' } })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies type class', () => {
    const wrapper = mount(BreText, { props: { type: 'success' } })
    expect(wrapper.classes()).toContain('bre-text--success')
  })

  it('applies size class', () => {
    const wrapper = mount(BreText, { props: { size: 'large' } })
    expect(wrapper.classes()).toContain('bre-text--large')
  })

  it('applies truncated class', () => {
    const wrapper = mount(BreText, { props: { truncated: true } })
    expect(wrapper.classes()).toContain('bre-text--truncated')
  })

  it('applies line-clamp style', () => {
    const wrapper = mount(BreText, { props: { lineClamp: 3 } })
    expect(wrapper.classes()).toContain('bre-text--line-clamp')
    expect(wrapper.attributes('style')).toContain('-webkit-line-clamp: 3')
  })

  it('emits click event', async () => {
    const wrapper = mount(BreText)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
