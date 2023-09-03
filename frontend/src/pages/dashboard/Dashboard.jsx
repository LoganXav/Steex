import React from "react";
import {
  Avatar,
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
import DashboardInstructorCard from "../../features/dashboard/DashboardInstructorCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-4">
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 flex-1">
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
              </Paper>
            ))}
            <Paper className="col-span-1 md:col-span-2 p-4">
              <div className="flex justify-between items-center mb-5">
                <Typography variant="h6" className="font-semibold">
                  Features Course Categories
                </Typography>
                <Typography className="text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-center justify-around">
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
                    type: "Open",
                  },
                ].map(({ logo, category, type }) => (
                  <div className="flex flex-col gap-3 items-center text-center pb-2">
                    <DashboardChip
                      size="medium"
                      status={type}
                      label={logo}
                      className="w-12 h-12 !rounded-md"
                    />
                    <Typography className="font-semibold">
                      {category}
                    </Typography>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
          <Paper className="lg:w-1/4 p-4 flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center mb-5">
              <Typography variant="h6" className="font-semibold">
                Daily Progress
              </Typography>
              <Typography className="text-mui-primary-tertiary">
                Today
              </Typography>
            </div>
            <Typography className="text-mui-primary-tertiary text-center">
              Very good, keep improving the quality of your learning
            </Typography>
          </Paper>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:h-[25rem] mb-4">
          <Paper className="w-full h-full md:w-2/3 p-4">
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
          </Paper>
          <Paper className="w-full md:w-1/3 h-[25rem] md:h-full pb-4">
            <div className="pb-4 h-full overflow-hidden">
              <div className="w-full flex justify-between items-center p-4">
                <Typography variant="h6" className="font-semibold">
                  Best Instructors
                </Typography>
                <Typography className="text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="overflow-y-scroll h-full custom-scrollbar pb-8">
                {[
                  {
                    name: "Bethany Nienow",
                    desc: "247 Courses",
                    rating: "4.8",
                  },
                  {
                    name: "Bethany Nienow",
                    desc: "236 Courses",
                    rating: "4.8",
                  },
                  {
                    name: "Bethany Nienow",
                    desc: "365 Courses",
                    rating: "4.8",
                  },
                  {
                    name: "Bethany Nienow",
                    desc: "298 Courses",
                    rating: "4.8",
                  },
                  {
                    name: "Bethany Nienow",
                    desc: "196 Courses",
                    rating: "4.8",
                  },
                  {
                    name: "Bethany Nienow",
                    desc: "321 Courses",
                    rating: "4.8",
                  },
                ].map(({ name, desc, rating }, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b p-4"
                  >
                    <DashboardInstructorCard name={name} desc={desc} />
                    <DashboardChip
                      size="small"
                      status="Rating"
                      label={rating}
                      className="!rounded-md h-4 px-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Paper>
        </div>
        <div className="h-[30rem]">
          <Paper className="w-full h-full">
          <div className="w-full flex justify-between items-center p-4">
                <Typography variant="h6" className="font-semibold">
                  Recent Courses
                </Typography>
                <Typography className="flex items-center">
                  SORT BY: <span className="text-mui-primary-tertiary ml-1">Course Name</span>
                </Typography>
              </div>
          </Paper>
        </div>
      </div>
      <Paper className="w-full lg:w-1/4 p-4">
        <div className="w-full flex justify-between items-center mb-5">
          <Typography variant="h6" className="font-semibold">
            Overview
          </Typography>
          <DashboardChip
            size="small"
            status=""
            label="S"
            className="w-9 h-9 !rounded-sm cursor-pointer hover:bg-black"
          />
        </div>
        <div className="flex flex-col text-center items-center gap-1 mb-6">
          <Avatar className="w-20 h-20 mb-2" src=""></Avatar>
          <Typography className="font-semibold">Logan Xavier</Typography>
          <Typography className="text-mui-primary-tertiary">
            Software Engineer
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="text-center">
            <Typography className="font-semibold">1549</Typography>
            <Typography className="text-mui-primary-tertiary">
              Students
            </Typography>
          </div>
          <hr className="w-8 border-dashed rotate-90" />
          <div className="text-center">
            <Typography className="font-semibold">1549</Typography>
            <Typography className="text-mui-primary-tertiary">
              Students
            </Typography>
          </div>
        </div>
        <Typography variant="h6" className="font-semibold mb-6">
          Upcoming Schedule
        </Typography>
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
            {
              title: "Advanced React and Redux",
              date: "04 April, 2023",
              time: "02:18 PM",
            },
          ].map(({ title, date, time }, index) => (
            <Paper elevation={0} key={index} className="p-4 flex lg:flex-col lg:gap-2 xl:gap-0 xl:flex-row items-center justify-between border-l-4 border-[#3762EA]">
              <div className="">
                <Typography className="">{title}</Typography>
                <div className="flex lg:flex-col xl:flex-row items-center gap-2 text-mui-primary-tertiary">
                  <Typography className="">{date}</Typography>
                  <Typography className="">{time}</Typography>
                </div>
              </div>
              <Button size="small" className="px-0" color="primary">A</Button>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
