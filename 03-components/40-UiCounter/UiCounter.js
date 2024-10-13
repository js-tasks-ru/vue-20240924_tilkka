import { defineComponent, computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity
    }
  },

  setup(props, { emit }) {
    const increment = () => {
      emit('update:count', props.count + 1);
    }
    const decrement = () => {
      emit('update:count', props.count - 1);
    }
    const isIncrementDisabled = computed(() => {
      return props.count >= props.max;
    });
    const isDecrementDisabled = computed(() => {
      return props.count <= props.min;
    });


    return {
      increment,
      decrement,
      isIncrementDisabled,
      isDecrementDisabled
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement"  @click="decrement" :disabled="isDecrementDisabled" >➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="increment" :disabled="isIncrementDisabled">➕</UiButton>
    </div>
  `,
})
