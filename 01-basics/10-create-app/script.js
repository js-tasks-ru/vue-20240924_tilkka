import { defineComponent, createApp } from 'vue'

const MyComponent = defineComponent({
  name: "MyComponent",
  template: `<div class="date">Сегодня ${new Date().toLocaleString('en-EN', { dateStyle: 'long' })}</div>`
})

createApp(MyComponent).mount('#app')