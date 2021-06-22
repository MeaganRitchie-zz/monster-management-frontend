export const pointsChartData = {
  type: "bar",
  data: {
    labels: ["6/17", "6/18", "6/21", "6/22", "6/23", "6/24"],
    datasets: [
      {
        label: "Positive Points",
        data: [5, 3, 7, 5, 9, 4],
        backgroundColor: "rgba(163, 208, 119,.4)",
        borderColor: "#a3d077",
        borderWidth: 2
      },
      {
        label: "Negative Points",
        data: [1, 0, 0, 1, 2, 1],
        backgroundColor: "rgba(166, 122, 207, .4)",
        borderColor: "#a67acf",
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 3,

          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 0,

          }
        }

      ]
    }
  }
};

export default pointsChartData;