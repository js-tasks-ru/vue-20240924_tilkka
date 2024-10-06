import { defineComponent, ref, onMounted, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const checkedId = ref(1)
    const meetupTitle = ref('')

    const findMeetUpTitle = async () => {
      const { title } = await getMeetup(checkedId.value)
      return meetupTitle.value = title
    }

    onMounted(async () => {
      await findMeetUpTitle()
    })

    watch(checkedId, async () => {
      await findMeetUpTitle()
    })

    return {
      checkedId,
      meetupTitle,
      findMeetUpTitle
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" @click="checkedId--" :disabled="checkedId < 2">Предыдущий</button>

        <div class="radio-group" role="radiogroup" >
          <div class="radio-group__button" v-for="(button, index) in 5" :key="'button-' + (index + 1)">
            <input
              :id="'meetup-id-' + (index + 1)"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="index + 1"
              v-model="checkedId"
            />
            <label :for="'meetup-id-' + (index + 1)" class="radio-group__label">{{ index + 1 }}</label>
          </div>
        
        </div>

        <button class="button button--secondary" type="button" @click="checkedId++" :disabled="checkedId > 4">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>

    </div>
  `,
})
