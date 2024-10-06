import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */

    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    return {
      x,
      y,
      handleClick
    }

    /**
    Comments:
    The actual error - in setup the value is accessed through the value property. No x and y inside return. 
    Conceptual error - there is no need to use watch to track changes x and y as we have already applied ref. Vue took over this function. Well, querySelector is too much :)
    */
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span :style="{top: y + 'px', left: x + 'px'}" class="pin">📍</span>
    </div>
  `,
})
