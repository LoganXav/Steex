import { RouteEnum } from "../../constants/RouterConstants";
import { Avatar, Paper, Typography } from "@mui/material";
import DashboardChip from "../../features/dashboard/DashboardChip";
// import ChurchLogo from "../../assets/church_logo.png"; // Replace with a relevant logo for your church
// import EventLogo from "../../assets/event_logo.png"; // Example of event logo
// import VolunteerLogo from "../../assets/volunteer_logo.png"; // Example of volunteer logo
import DashboardInstructorCard from "../../features/dashboard/DashboardInstructorCard"; // You can rename to "VolunteerCard" if needed
import DashboardPieChart from "../../features/dashboard/DashboardPieChart";
import DashboardDailyProgressChart from "../../features/dashboard/DashboardDailyProgressChart";
import DashboardRecentCoursesTable from "../../features/dashboard/DashboardRecentCoursesTable"; // Rename to "RecentEventsTable" if necessary
import { Link } from "react-router-dom";
import useAuthUser from "hooks/useAuthUser";

const Dashboard = () => {
  const authUser = useAuthUser();

  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-4">
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 flex-1">
            {[
              // Modify for church-related stats
              {
                title: "Total Members",
                type: "Gain",
                label: "4.65%",
                amount: "1,234",
                value: 550,
                series: [90, 10],
                colors: ["#2764d8", "#c4e8ef"],
              },
              {
                title: "Upcoming Events",
                type: "Loss",
                label: "1.27%",
                amount: "12",
                value: 550,
                series: [50, 50],
                colors: ["#2764d8", "#c4e8ef"],
              },
            ].map(({ title, amount, label, type, value, series, colors }, index) => (
              <DashboardPieChart key={index} title={title} label={label} type={type} amount={amount} value={value} series={series} colors={colors} />
            ))}
            <Paper className="col-span-1 md:col-span-2 p-4">
              <div className="flex justify-between items-center mb-5">
                <Typography variant="h6" className="font-semibold">
                  Featured Ministries
                </Typography>
                <Typography component={Link} to={RouteEnum.MINISTRIES} className="text-mui-primary-tertiary hover:text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-3">
                {[
                  // Modify ministries categories for church
                  {
                    // logo: <img src={ChurchLogo} />,
                    category: "Worship Ministry",
                    type: "Open",
                  },
                  {
                    // logo: <img src={EventLogo} />,
                    category: "Events & Outreach",
                    type: "Open",
                  },
                  {
                    // logo: <img src={VolunteerLogo} />,
                    category: "Volunteer Support",
                    type: "Open",
                  },
                  {
                    // logo: <img src={ChurchLogo} />,
                    category: "Children's Ministry",
                    type: "Gain",
                  },
                ].map(({ logo, category, type }, index) => (
                  <div key={index} className="flex col-span-1 flex-col gap-3 items-center text-center pb-2">
                    <DashboardChip size="medium" status={type} label={logo} className="w-12 h-12 !rounded-md" />
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
                  Top Volunteers
                </Typography>
                <Typography component={Link} to={RouteEnum.VOLUNTEERS} className="text-mui-primary-tertiary hover:text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="overflow-y-scroll h-full custom-scrollbar pb-8">
                {[
                  // Modify volunteers info for church
                  {
                    name: "John Doe",
                    desc: "12 Events Participated",
                    rating: "4.9",
                  },
                  {
                    name: "Jane Smith",
                    desc: "10 Events Participated",
                    rating: "4.8",
                  },
                ].map(({ name, desc, rating }, index) => (
                  <div key={index} className="flex justify-between items-center border-b p-4">
                    <DashboardInstructorCard name={name} desc={desc} />
                    <DashboardChip size="small" status="Rating" label={rating} className="!rounded-md h-4 px-1" />
                  </div>
                ))}
              </div>
            </div>
          </Paper>
          <Paper className="w-full h-[25rem]">
            <div className="pb-4 h-full overflow-hidden">
              <div className="w-full flex justify-between items-center p-4">
                <Typography variant="h6" className="font-semibold">
                  Upcoming Events
                </Typography>
                <Typography component={Link} to={RouteEnum.EVENTS} className="text-mui-primary-tertiary hover:text-mui-primary-main">
                  View All
                </Typography>
              </div>
              <div className="overflow-y-scroll h-full custom-scrollbar pb-8">
                {[
                  // Modify events list for church
                  {
                    name: "Sunday Service",
                    desc: "Worship and Word",
                    date: "04 April, 2023",
                    time: "10:00 AM",
                  },
                  {
                    name: "Youth Fellowship",
                    desc: "Praise and Worship",
                    date: "05 April, 2023",
                    time: "06:00 PM",
                  },
                ].map(({ name, desc, date, time }, index) => (
                  <div key={index} className="flex justify-between items-center border-b p-4">
                    <DashboardInstructorCard name={name} desc={desc} />
                    <Typography className="text-mui-primary-tertiary">
                      {date} at {time}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Paper>
        </div>

        {/* <DashboardRecentCoursesTable /> */}
      </div>
      <Paper className="w-full lg:w-1/4 p-4">
        <div className="w-full flex justify-between items-center mb-5">
          <Typography variant="h6" className="font-semibold">
            Overview
          </Typography>
          <DashboardChip size="small" status="" label="S" className="w-9 h-9 !rounded-sm cursor-pointer hover:bg-black" />
        </div>
        <div className="flex flex-col text-center items-center gap-1 mb-6">
          <Avatar className="w-20 h-20 mb-2" src=""></Avatar>
          <Typography variant="h6" className="font-semibold">
            {authUser.username}
          </Typography>
          <Typography className="text-mui-primary-tertiary">Church Administrator</Typography>
        </div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="text-center">
            <Typography className="font-semibold">1549</Typography>
            <Typography className="text-mui-primary-tertiary">Members</Typography>
          </div>
          <hr className="w-8 border-dashed rotate-90" />
          <div className="text-center">
            <Typography className="font-semibold">12</Typography>
            <Typography className="text-mui-primary-tertiary">Upcoming Events</Typography>
          </div>
        </div>
        <Typography variant="h6" className="font-semibold mb-6">
          Upcoming Schedule
        </Typography>
        <div className="grid grid-cols-1 gap-4">
          {[
            // Modify for church-related events
            {
              title: "Sunday Worship Service",
              date: "04 April, 2023",
              time: "10:00 AM",
            },
            {
              title: "Youth Fellowship",
              date: "05 April, 2023",
              time: "06:00 PM",
            },
          ].map(({ title, date, time }, index) => (
            <Paper elevation={0} key={index} className="p-4 border-l-4 border-[#3762EA]">
              <div className="">
                <Typography className="">{title}</Typography>
                <div className="flex flex-wrap items-center gap-2">
                  <Typography className="text-mui-primary-tertiary">{date}</Typography>
                  <Typography className="text-mui-primary-tertiary">{time}</Typography>
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
