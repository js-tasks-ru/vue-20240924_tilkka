import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0)
    const secondOperand = ref(0)
    const selectedOperator = ref('sum')

    const result = computed(() => {
      let answer = 0
      switch (selectedOperator.value) {
        case 'sum':
          return answer = firstOperand.value + secondOperand.value
        case 'subtract':
          return answer = firstOperand.value - secondOperand.value
        case 'multiply':
          return answer = firstOperand.value * secondOperand.value
        case 'divide':
          return answer = firstOperand.value / secondOperand.value
      }
      return answer
    })

    return {
      firstOperand,
      secondOperand,
      selectedOperator,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="selectedOperator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="selectedOperator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="selectedOperator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="selectedOperator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
