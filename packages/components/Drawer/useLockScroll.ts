import { onUnmounted } from 'vue'

export const useLockScroll = () => {
  let scrollTop = 0

  const lockScroll = () => {
    scrollTop = document.documentElement.scrollTop
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollTop}px`
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, scrollTop)
  }

  onUnmounted(() => {
    unlockScroll()
  })

  return { lockScroll, unlockScroll }
}
