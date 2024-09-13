import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0)

    const increase = () => {
      return ++count.value
    }

    const decrease = () => {
      return --count.value
    }

    return {
      count,
      increase,
      decrease
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count <= 0"
        @click="decrease"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="increase"
        :disabled="count >= 5"
      >➕</button>
    </div>
  `,
})
