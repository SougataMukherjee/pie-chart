import { useState } from "react";
import Chart from "react-apexcharts";
import { colors } from "./colorConstant";

export default function App() {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        background: colors.grey_dark,
        foreColor: colors.white,
        stacked: true,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      grid: {
        padding: {
          left: 50,
          right: 35,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 20,
        },
      },
      fill: {
        colors: [colors.fill_color],
        type: "gradient", //or solid or pattern
      },
      stroke: {
        show: true,
        // width: 10,
        // dashArray: 20,
        curve: "smooth", // straight or stepline
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Statistic of Learning",
        align: "center",
        margin: 30,
        style: {
          fontSize: "20px",
        },
      },
    },
    series: [
      {
        name: "Improve %",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const [showChart, setShowChart] = useState(false);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <button onClick={toggleChart}>Show/Hide Chart</button>
      {showChart && (
        <Chart
          options={chartState.options}
          series={chartState.series}
          type="area" //type="line" or "bar"
          height="400"
          width="500"
        />
      )}
    </div>
  );
}
