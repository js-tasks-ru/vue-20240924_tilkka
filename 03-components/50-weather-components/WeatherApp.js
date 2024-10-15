import { defineComponent, ref } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import { UiContainer } from '@shgk/vue-course-ui';
import WeatherList from './WeatherList.js';
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    UiContainer,
    WeatherList
  },

  setup() {
    const weatherData = ref(getWeatherData());
    const weatherConditionIcons = ref(WeatherConditionIcons);

    return {
      weatherData,
      weatherConditionIcons
    }
  },

  template: `
    <UiContainer>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :weatherData :weatherConditionIcons/>
    </UiContainer>
  `,
})
