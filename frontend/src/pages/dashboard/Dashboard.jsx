import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DashboardChip from "../../features/dashboard/DashboardChip";
import ShopifyLogo from "../../assets/shopify.png";
import WebpackLogo from "../../assets/webpack.png";
import LaravelLogo from "../../assets/laravel.png";
import ReactLogo from "../../assets/react.png";

const Dashboard = () => {
  return (
    <div className="flex gap-4 mt-20">
      <div className="w-3/4">
        <div className="flex gap-4 mb-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
            {[
              {
                title: "Total Students",
                type: "Gain",
                label: "4.65%",
                amount: "4,899k",
              },
              {
                title: "Total Courses",
                type: "Loss",
                label: "1.27%",
                amount: "754",
              },
            ].map(({ title, amount, label, type }) => (
              <Paper className="flex flex-col gap-4 p-4">
                <div className="flex justify-between items-center">
                  <Typography
                    variant="body2"
                    className="text-mui-primary-tertiary"
                  >
                    {title}
                  </Typography>
                  <DashboardChip
                    size="small"
                    status={type}
                    label={label}
                    className="!rounded-md h-4"
                  />
                </div>
                <Typography variant="h5" className="font-semibold">
                  {amount}
                </Typography>
              </Paper>
            ))}
            <Paper className="col-span-2 p-4">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-semibold">Features Course Categories</Typography>
                <Typography className="text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="flex items-center justify-around">
                {[
                  {
                    logo: <img src={ShopifyLogo} />,
                    category: "Shopify Development",
                    type: "Gain",
                  },
                  {
                    logo: <img src={WebpackLogo} />,
                    category: "Marketing & Management",
                    type: "Open",
                  },
                  {
                    logo: <img src={LaravelLogo} />,
                    category: "Laravel Development",
                    type: "Close",
                  },
                  {
                    logo: <img src={ReactLogo} />,
                    category: "React Development",
                    type: "Gain",
                  },
                ].map(({ logo, category, type }) => (
                  <div className="flex flex-col gap-3 items-center text-center">
                    <DashboardChip size="medium" status={type} label={logo} className="w-12 h-12 !rounded-md"/>
                    <Typography variant="body2" className="font-semibold">{category}</Typography>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
          <Paper className="w-1/4"></Paper>
        </div>
        <div className="flex gap-4 h-[30rem] mb-4">
          <Paper className="flex-1"></Paper>
          <Paper className="w-1/3"></Paper>
        </div>
        <div className="h-[30rem]">
          <Paper className="w-full h-full"></Paper>
        </div>
      </div>
      <Paper className="w-1/4"></Paper>
    </div>
  );
};

export default Dashboard;
