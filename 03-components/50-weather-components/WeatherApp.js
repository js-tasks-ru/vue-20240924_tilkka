import { defineComponent, ref } from 'vue'
import { getWeatherData } from './weather.service.ts'
import { UiContainer } from '@shgk/vue-course-ui'
import WeatherList from './WeatherList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    UiContainer,
    WeatherList,
  },

  setup() {
    const weatherData = ref(getWeatherData())

    return {
      weatherData,
    }
  },

  template: `
    <UiContainer>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :weatherData/>
    </UiContainer>
  `,
})
