import ReactApexChart from 'react-apexcharts';
import { LearningOverviewOptions } from './DashboardChartConfig'
import {
    Avatar,
    Paper,
    Typography,
} from "@mui/material";
import DashboardChip from "./DashboardChip";

function DashboardLearningOverviewChart({ }) {
    return (
        <>
            <Paper className="w-full h-[25rem] md:w-2/3 lg:w-full 2xl:w-2/3 p-4">
                <div className="w-full flex justify-between items-center">
                    <Typography variant="h6" className="font-semibold">
                        Learning Overview
                    </Typography>
                    <div className="flex gap-2 items-center">
                        {[
                            {
                                filter: "ALL",
                                type: "Primary",
                            },
                            {
                                filter: "1M",
                                type: "Primary",
                            },
                            {
                                filter: "6M",
                                type: "Primary",
                            },
                            {
                                filter: "1Y",
                                type: "Open",
                            },
                        ].map(({ filter, type }) => (
                            <DashboardChip
                                size="small"
                                status={type}
                                label={filter}
                                className="w-9 h-7 !rounded-sm cursor-pointer hover:bg-black hover:text-white"
                            />
                        ))}
                    </div>
                </div>
                <ReactApexChart options={LearningOverviewOptions.options} series={LearningOverviewOptions.series} type="line" height={300} />
            </Paper>
        </>
    );
}

export default DashboardLearningOverviewChart
