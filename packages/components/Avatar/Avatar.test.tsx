import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BreAvatar from './Avatar.js'

describe('BreAvatar', () => {
  it('renders image avatar correctly', () => {
    const wrapper = mount(BreAvatar, {
      props: {
        src: 'test.jpg',
        size: '48px',
        shape: 'circle',
        fit: 'cover'
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.attributes('style')).toContain('width: 48px')
    expect(wrapper.attributes('style')).toContain('height: 48px')
    expect(wrapper.classes()).toContain('bre-avatar--circle')
  })

  it('renders icon avatar correctly', () => {
    const wrapper = mount(BreAvatar, {
      props: {
        icon: 'icon-user',
        size: '32px',
        shape: 'square'
      }
    })

    expect(wrapper.find('i.icon-user').exists()).toBe(true)
    expect(wrapper.classes()).toContain('bre-avatar--square')
  })

  it('renders default avatar when no src/icon', () => {
    const wrapper = mount(BreAvatar)
    expect(wrapper.find('.bre-avatar__default').exists()).toBe(true)
  })

  it('emits error event on image load failure', async () => {
    const wrapper = mount(BreAvatar, {
      props: { src: 'invalid.jpg' }
    })

    await wrapper.find('img').trigger('error')
    expect(wrapper.emitted()).toHaveProperty('error')
  })
})
