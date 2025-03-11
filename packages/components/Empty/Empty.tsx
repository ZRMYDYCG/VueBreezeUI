import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'BreEmpty',
  props: {
    image: {
      type: String,
      default:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxkZWZzLz48cGF0aCBkPSJNOTQ5LjQgNDk0LjhjMC0xODAuNi-...（base64占位符）'
    },
    imageSize: {
      type: Number,
      default: 240
    },
    description: {
      type: String,
      default: '暂无数据'
    }
  },
  emits: {},
  setup(props, { slots }) {
    const renderImage = () => {
      if (slots.image) {
        return slots.image()
      }
      return props.image ? (
        <img
          class="bre-empty__image"
          src={props.image}
          alt="empty"
          style={{ width: `${props.imageSize}px` }}
        />
      ) : null
    }

    const renderDescription = () => {
      if (slots.description) {
        return <div class="bre-empty__description">{slots.description()}</div>
      }
      return props.description ? <p class="bre-empty__description">{props.description}</p> : null
    }

    return () => (
      <div class="bre-empty">
        <div class="bre-empty__image-wrapper">{renderImage()}</div>
        {renderDescription()}
        {slots.default?.()}
      </div>
    )
  }
})
