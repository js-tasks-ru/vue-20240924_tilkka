import { defineComponent, createApp } from 'vue'

const MyComponent = defineComponent({
  name: "MyComponent",
  setup() {

    const today = new Date().toLocaleString(navigator.language, { dateStyle: 'long' });

    return {
      today
    }
  },

  template: `<div class="date">Сегодня {{ today }}</div>`
})

createApp(MyComponent).mount('#app')