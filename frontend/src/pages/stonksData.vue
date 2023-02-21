<template>
  <div>
    <Line :data="data" :options="options"/>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { defineComponent } from 'vue'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default defineComponent({
  name: "stonksData",
  components: {
    Line,
  },
  setup() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
    return {
      data,
      options,
    }
  }
  })
</script>
