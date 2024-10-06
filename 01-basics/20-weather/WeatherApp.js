import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const weatherData = getWeatherData()
    const weatherConditionIcons = WeatherConditionIcons;

    const isDayTime = (current, sunrise, sunset) => {
      // return new Date(`1970-01-01T${current}:00`).getTime() > new Date(`1970-01-01T${sunrise}:00`).getTime() && new Date(`1970-01-01T${current}:00`).getTime() < new Date(`1970-01-01T${sunset}:00`).getTime();
      return current > sunrise && current < sunset; // one more compare variant
    }

    return {
      weatherData, weatherConditionIcons, isDayTime
    }
  },

  template: `<div v-for="(weather, index) in weatherData" :key="weather.geographic_name">
      <h1 v-if="index === 0" class="title">Погода в Средиземье</h1>

      <ul class="weather-list">
        <li class="weather-card" :class="!isDayTime(weather.current.dt, weather.current.sunrise, weather.current.sunset) ? 'weather-card--night' : ''">
          <div v-if="weather.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
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
      </li>
    </ul>
    </div>`
  ,
})
