// const barChart = document.querySelector("#bar-chart").getContext("2d");
// console.log(barChart);
// new Chart(barChart, {
//   type: "doughnut",
//   data: {
//     labels: [
//       "Enero",
//       "Febrero",
//       "Marzo",
//       "Abril",
//       "Mayo",
//       "Junio",
//       "Julio",
//       "Agosto",
//       "Septiembre",
//       "Octubre",
//       "Noviembre",
//       "Diciembre",
//     ],
//     datasets: [
//       {
//         label: "Meses del año",
//         data: [10, 12, 5, 11, 8, 10, 12, 5, 11, 8, 10, 12],
//         backgroundColor: [
//           "#20FFA0",
//           "#FF6420",
//           "#20FFA0",
//           "#009EFF",
//           "#DE25FF",
//         ],
//         borderColor: "#c9c9c9", //["#000", "#f01", "#aac", "#019"],
//         borderWidth: 1,
//       },
//     ],
//   },
// });

const selectChart = document.querySelector("#select-chart");

const chartTaskRearrayProductt = document
  .querySelector("#task_chart_rearrayProductt")
  .getContext("2d");

let myChart = generateChart();

selectChart.onchange = (e) => {
  myChart.destroy();
  myChart = generateChart(e.target.value);
  updateCalcChart();
};

function generateChart(type = "doughnut") {
  return new Chart(chartTaskRearrayProductt, {
    type,
    data: {
      labels: ["TODO", "DONE", "DELETE"],
      datasets: [
        {
          label: "Estados de tareas",
          backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
        },
      ],
    },
  });
}

function updateCalcChart() {
  ["todo", "done", "delete"].forEach((dato, index) => {
    myChart.data.datasets[0].data[index] = getCountTask(dato);
  });
  myChart.update();
}

function getCountTask(status) {
  const tasks = arrayTask.filter((task) => task.status === status);
  return tasks.length;
}

const btnEarrayProducttChart = document.querySelector(
  "#btn-exarrayProductt-chart"
);
btnEarrayProducttChart.onclick = () => {
  const base64Url = myChart.toBase64Image("image/jpeg", 1);
  const a = document.createElement("a");
  a.href = base64Url;
  a.download = `chart-${new Date().toLocaleTimeString()}`;
  document.body.append(a);
  a.click();
  document.body.removeChild(a);
};

// function updateCalcChart() {
//   myChart.data.datasets[0].data[0] = getCountTask("todo");
//   myChart.data.datasets[0].data[1] = getCountTask("done");
//   myChart.data.datasets[0].data[2] = getCountTask("delete");
//   myChart.update();
// }
