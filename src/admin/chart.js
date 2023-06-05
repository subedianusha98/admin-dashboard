// import React from "react";

// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const datas = [
//   { year: 2015, count: 1 },
//   { year: 2016, count: 10 },
//   { year: 2017, count: 4 },
//   { year: 2018, count: 10 },
//   { year: 2019, count: 1 },
//   { year: 2020, count: 8 },
//   { year: 2021, count: 2 },
//   { year: 2022, count: 10 },
// ];

// const BarChart = () => {
//   return (
//     <section className="flex">
//       <div className="Chart  p-4 rounded-lg w-70 h-100">
//       <Bar
//         data={{
//           labels: datas.map((data) => data.year),
//           datasets: [
//             {
//               label: "count",
//               data: datas.map((data) => data.count),
//               backgroundColor: "rgba(255,99,132)",
//             },
//           ],
//         }}
//       />
//     </div>
//     </section>
//   );
// };

// export default BarChart;
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {


    const data = {
        labels: ['Year 2019', 'Year 2020', 'Year 2021', 'Year 2022','Year 2023'],
        datasets: [{
            label: 'Sales by Category',
            data: [1200, 5000, 3000, 5200, 2336],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false, },
            title: { display: false },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        if (value >= 500) {
                            return value / 500 + "K";
                        }
                        return value;
                    },
                },
            },
        },
    };

    return (
    
        <Bar data={data} options={options} />
        
    )
}

export default BarChart;