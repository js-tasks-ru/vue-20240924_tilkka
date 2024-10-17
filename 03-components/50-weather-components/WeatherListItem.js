import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service'

export default defineComponent({
  name: 'WeatherListItem',

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const weatherConditionIcons = WeatherConditionIcons

    return {
      weatherConditionIcons,
    }
  },

  template: `
    <div v-if="weather.alert" class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ weather.alert.sender_name }} : {{ weather.alert.description }}.</span>
    </div>
    <div>
      <h2 class="weather-card__name">
        {{ weather.geographic_name }}
      </h2>
      <div class="weather-card__time">
        {{ weather.current.dt }}
      </div>
    </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ weatherConditionIcons[weather.current.weather.id] }}</div>
      <div class="weather-conditions__temp">{{ (weather.current.temp - 273.15).toFixed(1) }} °C</div>
    </div>
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ Math.round(weather.current.pressure * 0.75) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
    </div>
  </div>
`,
})
