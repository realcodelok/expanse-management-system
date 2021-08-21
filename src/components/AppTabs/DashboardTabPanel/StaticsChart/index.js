import React from "react";
import { Bar } from "react-chartjs-2";
import useStyles from "./style";

export default function StaticsChart(props) {
  const classes = useStyles();
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

  const canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(253, 116, 155, 1)");
  gradient.addColorStop(1, "rgba(40, 26, 200, 1)");

  const datasets = [
    {
      label: "Expenses",
      data: [100, 200, 400, 300, 500],
      backgroundColor: gradient,
      maxBarThickness: 10,
      borderRadius: 25,
      pointStyle: "This is pointing",
    },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: 10,
    },
    scales: {
      x: {
        grid: {
          offset: false,
          stacked: true,
          color: "transparent",
          borderWidth: 1,
          borderColor: "#fff",
          tickColor: "#fff",
        },
        scaleLabel: {
          display: true,
          labelString: "Y axis",
          fontSize: 120,
          color: "red",
        },
      },
      y: {
        grid: {
          offset: false,
          stacked: true,
          borderStyle: "dotted",
          borderDash: [3],
          lineWidth: 1,
          drawOnChartArea: true,
          circular: true,
          borderWidth: 3,
          borderColor: "#D8D8D8",
          color: "#f2f2f2",
          tickColor: "#fff",
        },
        ticks: {
          callback: function (value, index, values) {
            // return "Rs. " + value;
            return value;
          },
        },
      },
    },
  };

  // const scales = {
  //   type: "scale",
  //   xAxes: [
  //     {
  //       title: "Hi",
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Hello ",
  //       },
  //     },
  //   ],
  // };
  return <Bar id="chart" data={{ labels, datasets }} options={options}></Bar>;
}
