<template>
  <BarChart :chartData="testData" :options="options" />
</template>

<script>
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: 'ArmyTimeLeft',
  components: { BarChart },
  setup() {
    const now = new Date();

    const ckoStart = new Date(2020, 6, 27);   
    const ckoEnd = new Date(2022, 3, 27);

    let ckoRatio = (now - ckoStart) / (ckoEnd - ckoStart) * 100;
    ckoRatio = ckoRatio > 100 ? 100 : ckoRatio;

    const bhrStart = new Date(2021, 0, 11);   
    const bhrEnd = new Date(2022, 6, 10);

    let bhrRatio = (now - bhrStart) / (bhrEnd - bhrStart) * 100;
    bhrRatio = bhrRatio > 100 ? 100 : bhrRatio;

    const ldhStart = new Date(2021, 0, 4);   
    const ldhEnd = new Date(2022, 9, 3);

    let ldhRatio = (now - ldhStart) / (ldhEnd - ldhStart) * 100;
    ldhRatio = ldhRatio > 100 ? 100 : ldhRatio;

    const ssmStart = new Date(2021, 4, 10);
    const ssmEnd = new Date(2023, 1, 9);

    let ssmRatio = (now - ssmStart) / (ssmEnd - ssmStart) * 100;
    ssmRatio = ssmRatio > 100 ? 100 : ssmRatio;
    
    const lsmStart = new Date(2022, 2, 21);
    const lsmEnd = new Date(2023, 11, 21);

    let lsmRatio = (now - lsmStart) / (lsmEnd - lsmStart) * 100;
    lsmRatio = lsmRatio > 100 ? 100 : lsmRatio;
    

    const testData = {
      labels: ['채경욱', '강동헌', '이승운', '임동현', '백하린', '신승민', '이승민'],
      datasets: [
        {
          label: '진행률',
          data: [ckoRatio, 100, 100, ldhRatio, bhrRatio, ssmRatio, lsmRatio],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 0, 255, 0.2)'
          ],
        },
      ],
    };
    const options = {
      indexAxis: 'y',
    }
    return { testData, options };
  },
}
</script>