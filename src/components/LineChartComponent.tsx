import { useRef } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
  {
    name: "Revenue",
    type: "area",
    data: [20, 25, 20, 50, 30, 30, 20, 40, 40, 20, 35],
  },
  {
    name: "Revenue-2",
    type: "area",
    data: [25, 30, 40, 20, 35, 30, 30, 25, 30, 20, 50],
  },
];

const options: ApexOptions = {
  chart: {
    height: 300,
    type: "area",
    group: "social",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    offsetX: -16,
  },
  colors: ["var(--primary)", "#FF3D3D"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [0, 0],
    colors: ["var(--primary)", "#FF6A59"],
    curve: "straight",
  },
  legend: {
    show: false,
    tooltipHoverFormatter: function (
      val: string,
      opts: {
        w: { globals: { series: number[][] } };
        seriesIndex: number;
        dataPointIndex: number;
      }
    ) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
      );
    },
  },
  xaxis: {
    categories: [
      "Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu",
    ],
    labels: {
      style: {
        colors: "#3E4954",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: 100,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: -16,
      minWidth: 40,
      style: {
        colors: "#3E4954",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: 100,
      },
    },
    axisTicks: {
      show: false,
      color: "#78909C",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  fill: {
    type: "solid",
    opacity: 0.9,
  },
  grid: {
    borderColor: "#f1f1f1",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  responsive: [
    {
      breakpoint: 575,
      options: {},
    },
  ],
};

const LineChartComponent = () => {
  const chartRef = useRef<ReactApexChart | null>(null);

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        ref={chartRef}
        type="area"
        height={300}
      />
    </div>
  );
};

export default LineChartComponent;
