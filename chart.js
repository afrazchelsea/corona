// Line chart

let ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontSize = 20;

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Feb 15",
      "Feb 16",
      "Feb 17",
      "Feb 18",
      "Feb 19",
      "Feb 20",
      "Feb 21",
      "Feb 22",
      "Feb 23",
      "Feb 24",
      "Feb 25",
      "Feb 26",
      "Feb 27",
      "Feb 28",
      "Feb 29",
      "Mar 01",
      "Mar 02",
      "Mar 03",
      "Mar 04",
      "Mar 05",
      "Mar 06",
      "Mar 07",
      "Mar 08",
      "Mar 09",
      "Mar 10",
      "Mar 11",
      "Mar 12",
      "Mar 13",
      "Mar 14",
      "Mar 15",
      "Mar 16",
      "Mar 17",
      "Mar 18",
      "Mar 19",
      "Mar 20",
      "Mar 21",
      "Mar 22",
      "Mar 23",
      "Mar 24",
      "Mar 25",
      "Mar 26",
      "Mar 27",
      "Mar 28",
      "Mar 29",
      "Mar 30",
      "Mar 31",
      "Apr 01",
      "Apr 02",
      "Apr 03",
      "Apr 04",
      "Apr 05",
      "Apr 06",
      "Apr 07",
      "Apr 08",
      "Apr 09",
      "Apr 10",
      "Apr 11",
      "Apr 12",
      "Apr 13",
      "Apr 14",
      "Apr 15",
      "Apr 16"

    ],
    datasets: [
      {
        label: "No. of cases",
        data: [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          6,
          7,
          29,
          30,
          31,
          34,
          40,
          47,
          62,
          62,
          74,
          82,
          100,
          114,
          129,
          143,
          169,
          194,
          249,
          332,
          396,
          499,
          536,
          657,
          727,
          887,
          987,
          1024,
          1251,
          1397,
          1425,
          1520,
          1625,
          1750,
          1880,
          2004,
          2140,
          2280,
          2399,
          2510,
          2680,
          2700,
          2810,
          2920,
          3200,
          3400


        ],
        backgroundColor: ["rgba(60, 161, 195, 0.4)"],
        fill: true,
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 4
      }
    ]
  },
  options: {}
});

// Doughnut chart
fetch("https://api.covid19india.org/data.json")
  .then(res => res.json())
  .then(data => {
    let others =
      data.statewise[0].confirmed -
      data.statewise[1].confirmed -
      data.statewise[2].confirmed -
      data.statewise[5].confirmed -
      data.statewise[8].confirmed;

    new Chart(document.getElementById("doughnut-chart"), {
      type: "doughnut",
      data: {
        labels: [
          data.statewise[1].state,
          data.statewise[2].state,
          data.statewise[3].state,
          data.statewise[4].state,
          "Others"
        ],
        datasets: [
          {
            label: "Confirmed cases",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850"
            ],
            data: [
              data.statewise[1].confirmed,
              data.statewise[2].confirmed,
              data.statewise[3].confirmed,
              data.statewise[4].confirmed,
              others
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Statewise confirmed cases"
        },
        legend: {
          position: "bottom",
          top: 10
        }
      }
    });
  });

