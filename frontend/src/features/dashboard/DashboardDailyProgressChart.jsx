import ReactApexChart from "react-apexcharts";
import { Paper, Typography } from "@mui/material";
import { DailyProgressOptions } from "./DashboardChartConfig";

function DashboardDailyProgressChart() {
  return (
    <>
      <Paper className="2xl:w-1/4 p-4 flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center mb-5">
          <Typography variant="h6" className="font-semibold">
            Monthly Income Target
          </Typography>
          {/* <Typography className="text-mui-primary-tertiary">This Month</Typography> */}
        </div>
        <ReactApexChart options={DailyProgressOptions.options} series={DailyProgressOptions.series} type="radialBar" height={350} />
        <Typography className="text-mui-primary-tertiary text-center">
          Keep up the great work! Let{"'"}s reach this month{"'"}s target together.
        </Typography>
      </Paper>
    </>
  );
}

export default DashboardDailyProgressChart;
