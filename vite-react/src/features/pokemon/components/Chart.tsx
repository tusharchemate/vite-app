import { BarChart } from "@mui/x-charts";
interface PieChartProps {
  labels: string[];
  data: number[];
}

const PChart = ({ labels, data }: PieChartProps) => {
  return (
    <BarChart
      width={550}
      height={200}
      series={[
        {
          data: data,
          id: "pvId",
          color: "#30a7d7",
        },
      ]}
      xAxis={[{ data: labels, scaleType: "band" }]}
    />
  );
};

export default PChart;
