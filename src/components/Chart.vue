<template>
  <div>
    <canvas id="points-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import pointsChartData from "@/points-data.js";

export default {
  name: "Chart",

  data() {
    return {
      pointsChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("points-chart");
    new Chart(ctx, this.pointsChartData);
  },
};
</script>

<style scoped>
</style>