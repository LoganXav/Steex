import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import DashboardChip from "../../features/dashboard/DashboardChip";
import ShopifyLogo from "../../assets/shopify.png";
import WebpackLogo from "../../assets/webpack.png";
import LaravelLogo from "../../assets/laravel.png";
import ReactLogo from "../../assets/react.png";
import DashboardInstructorCard from "../../features/dashboard/DashboardInstructorCard";
import DashboardPieChart from "../../features/dashboard/DashboardPieChart";
import DashboardDailyProgressChart from "../../features/dashboard/DashboardDailyProgressChart";
import DashboardRecentCoursesTable from "../../features/dashboard/DashboardRecentCoursesTable";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-4">
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 flex-1">
            {[
              {
                title: "Total Students",
                type: "Gain",
                label: "4.65%",
                amount: "4,899k",
                value: 550,
                series: [90, 10],
                colors: ["#275be8", "#c4e8ef"],
              },
              {
                title: "Total Courses",
                type: "Loss",
                label: "1.27%",
                amount: "754",
                value: 550,
                series: [50, 50],
                colors: ["#275be8", "#c4e8ef"],
              },
            ].map(
              (
                { title, amount, label, type, value, series, colors },
                index
              ) => (
                <DashboardPieChart
                  key={index}
                  title={title}
                  label={label}
                  type={type}
                  amount={amount}
                  value={value}
                  series={series}
                  colors={colors}
                />
              )
            )}
            <Paper className="col-span-1 md:col-span-2 p-4">
              <div className="flex justify-between items-center mb-5">
                <Typography variant="h6" className="font-semibold">
                  Features Course Categories
                </Typography>
                <Typography className="text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-3">
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
                ].map(({ logo, category, type }, index) => (
                  <div
                    key={index}
                    className="flex col-span-1 flex-col gap-3 items-center text-center pb-2"
                  >
                    <DashboardChip
                      size="medium"
                      status={type}
                      label={logo}
                      className="w-12 h-12 !rounded-md"
                    />
                    <Typography noWrap className="w-full">
                      {category}
                    </Typography>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
          <DashboardDailyProgressChart />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-5 mb-4">
          <Paper className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 h-[25rem] pb-4">
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
          <Paper className="p-4">
            <div className="w-full flex justify-between items-center">
              <Typography variant="h6" className="font-semibold">
                Recent Courses
              </Typography>
              <Typography className="flex items-center">
                SORT BY:{" "}
                <span className="text-mui-primary-tertiary ml-1">
                  Course Name
                </span>
              </Typography>
            </div>
            <DashboardRecentCoursesTable />
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
          <Typography variant="h6" className="font-semibold">
            Logan Xavier
          </Typography>
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
          ].map(({ title, date, time }, index) => (
            <Paper
              elevation={0}
              key={index}
              className="p-4 border-l-4 border-[#3762EA]"
            >
              <div className="">
                <Typography className="">{title}</Typography>
                <div className="flex flex-wrap items-center gap-2 text-mui-primary-tertiary">
                  <Typography>{date}</Typography>
                  <Typography>{time}</Typography>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
