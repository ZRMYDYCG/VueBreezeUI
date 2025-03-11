import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import './style.scss'
import { BreIcon } from '../Icon'

export default defineComponent({
  name: 'BreAvatar',
  props: {
    icon: String,
    size: {
      type: String,
      default: '40px'
    },
    shape: {
      type: String as PropType<'circle' | 'square'>,
      default: 'circle'
    },
    src: String,
    srcSet: String,
    alt: String,
    fit: {
      type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
      default: 'cover'
    }
  },
  emits: ['error'],
  setup(props, { emit }) {
    const handleError = (e: Event) => {
      emit('error', e)
    }

    const avatarStyle = computed(() => ({
      width: props.size,
      height: props.size,
      fontSize: props.size // 用于图标字体大小计算
    }))

    return () => (
      <div class={['bre-avatar', `bre-avatar--${props.shape}`]} style={avatarStyle.value}>
        {props.src ? (
          <img
            class="bre-avatar__img"
            src={props.src}
            srcset={props.srcSet}
            alt={props.alt}
            style={{ objectFit: props.fit }}
            onError={handleError}
          />
        ) : props.icon ? (
          <BreIcon icon={props.icon} />
        ) : (
          <i class="bre-avatar__default" />
        )}
      </div>
    )
  }
})
