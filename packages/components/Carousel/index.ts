import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'
import { withInstall } from '@breeze-ui/utils'

export const BreCarousel = withInstall(Carousel)
export const BreCarouselItem = withInstall(CarouselItem)

export * from './interface.ts'
