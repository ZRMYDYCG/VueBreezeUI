export interface CarouselProps {
  /*carousel 的高度*/
  height: string
  /*初始状态激活的幻灯片的索引，从 0 开始*/
  initialIndex: number
  /*指示器的触发方式*/
  trigger?: 'hover' | 'click'
  /*是否自动切换*/
  autoplay: boolean
  /*自动切换的时间间隔，单位为毫秒*/
  interval: number
  /*指示器的位置*/
  indicatorPosition: '' | 'none' | 'outside'
  /*切换箭头的显示时机*/
  arrow: 'always' | 'hover' | 'never'
  /*是否循环显示*/
  loop: boolean
  /*展示的方向*/
  direction: 'horizontal' | 'vertical'
  /*鼠标悬浮时暂停自动切换*/
  pauseOnHover: boolean
}

export interface CarouselEmits {
  /*当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引*/
  (e: 'change', current: number, prev: number): void
}

/**
 *  slots:
 *  default	自定义默认内容	Carousel-Item
 * */

/**
 * defineExpose
 * activeIndex 当前幻灯片的索引
 * setActiveItem 手动切换幻灯片，传入需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值 (index: string | number) => void
 * prev 切换至上一张幻灯片 () => void
 * next 切换至下一张幻灯片 () => void
 * */
export interface CarouselItemProps {
  name: string
  label: string | number
}

export interface CarouselItemEmits {}

/**
 * slots:
 * default 自定义默认内容	-
 * */
