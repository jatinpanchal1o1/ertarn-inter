import React from "react";

import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
import { Line } from "react-chartjs-2";

const data = {
  labels: ["7 pm", "10 pm", "1 am", "4 am", "7 am", "10 am", "1 pm", "4 pm"],
  datasets: [
    {
      label: "Day and Time",
      data: [42, 38, 34, 32, 31, 35, 40, 43, 55],
      fill: true,
      backgroundColor: "rgba( 252, 211, 77,0.2)",
      borderColor: "rgba(252, 211, 77,1)",
      height: 400,
      width: 600,
    },
  ],
};

const options = {
  plugins: { legend: { display: false } },
  layout: { padding: { bottom: 100 } },
  // maintainAspectRatio: false,
  scales: {
    y: {
      // ticks: {
      //   color: "white",
      //   font: {
      //     size: 18,
      //   },
      // },
      display: false,
      grid: {
        color: "#171717",
      },
    },
    x: {
      ticks: {
        color: "#a3a3a3",
        font: {
          size: 18,
        },
      },
    },
  },
};

export default function LineBar() {
  return (
    <div>
      <Line data={data} options={options} width={100} height={20} />
    </div>
  );
}
