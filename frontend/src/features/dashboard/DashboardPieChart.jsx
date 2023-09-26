import ReactApexChart from 'react-apexcharts';
import {
    Avatar,
    Paper,
    Typography,
} from "@mui/material";
import DashboardChip from "../../features/dashboard/DashboardChip";

function DashboardPieChart({ title, amount, label, type, value, series, colors }) {
    return (
        <>
            <Paper className="flex flex-col gap-4 p-4">
                <div className="flex justify-between items-center">
                    <Typography className="text-mui-primary-tertiary">
                        {title}
                    </Typography>
                    <DashboardChip
                        size="small"
                        status={type}
                        label={label}
                        className="!rounded-md h-4"
                    />
                </div>
                    <Typography variant="h5" className="font-bold">
                        {amount}
                    </Typography>
                <div className='flex justify-center items-center'>
                    <ReactApexChart
                        options={{
                            chart: { type: "donut" },
                            colors,
                            legend: { show: false },
                            dataLabels: { enabled: false },
                        }}
                        series={series}
                        type="donut"
                        width="150px"
                    />
                </div>
            </Paper>
        </>
    );
}

export default DashboardPieChart;