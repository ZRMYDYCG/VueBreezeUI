/**
 * 默认状态渲染
 * Props传参验证
 * 插槽内容显示
 * 样式应用验证
 * 阴影交互行为
 * 边界条件处理
 * */
import { mount } from '@vue/test-utils'
import BreCard from './Card.vue'
import { describe, it, expect } from 'vitest'

describe('BreCard', () => {
  it('renders with default props', () => {
    const wrapper = mount(BreCard)

    expect(wrapper.classes()).toContain('shadow-always')
    expect(wrapper.find('.bre-card__body').exists()).toBe(true)
  })

  it('displays header content', () => {
    const headerText = 'Test Header'
    const wrapper = mount(BreCard, {
      props: { header: headerText }
    })

    expect(wrapper.find('.bre-card__header').text()).toBe(headerText)
  })

  it('uses header slot content', () => {
    const headerSlot = '<h2>Custom Header</h2>'
    const wrapper = mount(BreCard, {
      slots: { header: headerSlot }
    })

    expect(wrapper.find('.bre-card__header h2').html()).toContain(headerSlot)
  })

  it('applies body styles and classes', () => {
    const wrapper = mount(BreCard, {
      props: {
        bodyStyle: { backgroundColor: 'red' },
        bodyClass: 'custom-class'
      }
    })

    const body = wrapper.find('.bre-card__body')
    expect(body.attributes('style')).toContain('background-color: red')
    expect(body.classes()).toContain('custom-class')
  })

  it('changes shadow on hover', async () => {
    const wrapper = mount(BreCard, {
      props: { shadow: 'hover' }
    })

    expect(wrapper.classes()).toContain('shadow-hover')
    expect(wrapper.element.style.boxShadow).toBe('')

    await wrapper.trigger('mouseover')
    expect(wrapper.element.style.boxShadow).toContain('rgba')
  })
})
