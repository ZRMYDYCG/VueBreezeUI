import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BreEmpty from './Empty.tsx'

describe('BreEmpty', () => {
  it('renders default empty state', () => {
    const wrapper = mount(BreEmpty)

    expect(wrapper.find('.bre-empty__image').exists()).toBe(true)
    expect(wrapper.find('.bre-empty__description').text()).toBe('暂无数据')
  })

  it('accepts custom props', () => {
    const wrapper = mount(BreEmpty, {
      props: {
        image: 'custom.png',
        imageSize: 160,
        description: 'Custom description'
      }
    })

    expect(wrapper.find('img').attributes('src')).toBe('custom.png')
    expect(wrapper.find('img').attributes('style')).toContain('width: 160px')
    expect(wrapper.find('.bre-empty__description').text()).toBe('Custom description')
  })

  it('renders image slot', () => {
    const wrapper = mount(BreEmpty, {
      slots: {
        image: () => '<div class="custom-image">Custom Image</div>'
      }
    })

    expect(wrapper.find('.custom-image').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('renders description slot', () => {
    const wrapper = mount(BreEmpty, {
      slots: {
        description: () => '<span class="custom-desc">Custom Desc</span>'
      }
    })

    expect(wrapper.find('.custom-desc').exists()).toBe(true)
  })

  it('renders default slot', () => {
    const wrapper = mount(BreEmpty, {
      slots: {
        default: '<button>Refresh</button>'
      }
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })
})
