import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const getTime = () => {
      return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    const id = ref(0)
    const time = ref(getTime())

    const startTime = () => {
      id.value = setInterval(() => {
        time.value = getTime()
      }, 1000)
    }
    const stopTime = () => {
      clearInterval(id.value)
    }
    onMounted(startTime)
    onUnmounted(stopTime)

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
