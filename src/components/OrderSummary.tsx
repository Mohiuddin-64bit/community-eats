
import ReactApexChart from "react-apexcharts";
const series = [45, 10, 80];

const chartType: "donut" | "pie" | "bar" = "donut"; 


const options = {
  chart: {
      type: chartType,                
      width: 250,                
  },            
  dataLabels: {
    enabled: false
  },
  legend: {				
    show:false
  },
  stroke: {				
    width:0,
  },
  fill: {
    colors: ['var(--primary)', '#FF8D0E' ,'#46D767'],
  },
  responsive: [{
      breakpoint: 601,
      options: {
        chart: {
          width: 200,
          height: 200
        },
        legend: {
          position: 'bottom'
        }
      },                            
  }]  
}

const OrderSummary = () => { 
  return (
      <div id="AllProject">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={250}
        />
      </div>
  );
 
}

export default OrderSummary;
