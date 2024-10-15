import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const getTime = () => {
      return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }
    let id = 0
    const time = ref(getTime())

    const startTime = () => {
      id = setInterval(() => {
        time.value = getTime()
      }, 1000)
    }
    const stopTime = () => {
      clearInterval(id)
    }
    onMounted(startTime)
    onUnmounted(stopTime)

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
