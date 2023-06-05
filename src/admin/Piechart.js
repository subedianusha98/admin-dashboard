import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  const data = {
    labels: ["One", "Two", "Three"],
    datasets: [
      {
        label: "Sales by Category",
        data: [3, 6, 9],
        backgroundColor: ["#fdba74", "#f87171", "#818cf8"],
      },
    ],
  };
  const options = {};
  return (

      <Pie data={data} options={options} />
   
  );
};

export default Piechart;
