import { defineComponent } from 'vue'
import WeatherListItem from './WeatherListItem'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherListItem,
  },

  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const isDayTime = (current, sunrise, sunset) => {
      return current > sunrise && current < sunset
    }
    return {
      isDayTime,
    }
  },

  template: `
  <ul class="weather-list">
    <li v-for="weather in weatherData"
        :key="weather.geographic_name"
        class="weather-card"
        :class="{'weather-card--night': !isDayTime(weather.current.dt, weather.current.sunrise, weather.current.sunset)}">
      <WeatherListItem :weather/>
    </li>
</ul>
`,
})
