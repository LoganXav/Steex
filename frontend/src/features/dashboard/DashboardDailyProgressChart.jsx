import ReactApexChart from "react-apexcharts";
import { Paper, Typography } from "@mui/material";
import { DailyProgressOptions } from "./DashboardChartConfig";

function DashboardDailyProgressChart() {
  return (
    <>
      <Paper className="2xl:w-1/4 p-4 flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center mb-5">
          <Typography variant="h6" className="font-semibold">
            Daily Progress
          </Typography>
          <Typography className="text-mui-primary-tertiary">Today</Typography>
        </div>
        <ReactApexChart
          options={DailyProgressOptions.options}
          series={DailyProgressOptions.series}
          type="radialBar"
          height={350}
        />
        <Typography className="text-mui-primary-tertiary text-center">
          Very good, keep improving the quality of your learning
        </Typography>
      </Paper>
    </>
  );
}

export default DashboardDailyProgressChart;
