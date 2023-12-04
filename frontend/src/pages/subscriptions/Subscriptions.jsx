import React from "react";
import LoadingButton from "../../libs/mui/LoadingButton";
import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import Button from "../../libs/mui/Button";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import SubscriptionListCard from "../../features/subscriptions/SubscriptionListCard";
import ReactLogo from "../../assets/react.png";
import ShopifyLogo from "../../assets/shopify.png";
import LaravelLogo from "../../assets/laravel.png";
import { Link } from "react-router-dom";

const Subscriptions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="flex-1">
          <Paper className="p-4 flex justify-between">
            <Typography variant="h6" className="font-semibold">
              My Courses
            </Typography>
            <Button>Upgrade Courses</Button>
          </Paper>
          <div className="flex flex-col gap-4 mt-5">
            {[
              {
                title: "Advanced React and Redux",
                logo: ReactLogo,
                difficulty: "Intermediate",
                category: "React Development",
                duration: "1 year",
                students: 120,
                lessons: 15,
                instructor: "Logan Xavier",
                color: "primary",
                rating: false,
              },
              {
                title: "The Complete Shopify Dropshipping Course",
                logo: ShopifyLogo,
                difficulty: "Beginner",
                category: "Shopify Development",
                duration: "6 Months",
                students: 276,
                lessons: 68,
                instructor: "Ayaan Prime",
                color: "success",
                rating: true,
              },
              {
                title: "Master Laravel for Advanced Developers",
                logo: LaravelLogo,
                difficulty: "Advance",
                category: "Laravel Development",
                duration: "2 years",
                students: 84,
                lessons: 51,
                instructor: "Jonathan Stiller",
                color: "error",
                rating: true,
              },
              {
                title: "Advanced React and Redux",
                logo: ReactLogo,
                difficulty: "Intermediate",
                category: "React Development",
                duration: "1 year",
                students: 120,
                lessons: 15,
                instructor: "Logan Xavier",
                color: "primary",
                rating: false,
              },
              {
                title: "The Complete Shopify Dropshipping Course",
                logo: ShopifyLogo,
                difficulty: "Beginner",
                category: "Shopify Development",
                duration: "6 Months",
                students: 276,
                lessons: 68,
                instructor: "Ayaan Prime",
                color: "success",
                rating: true,
              },
              {
                title: "Master Laravel for Advanced Developers",
                logo: LaravelLogo,
                difficulty: "Advance",
                category: "Laravel Development",
                duration: "2 years",
                students: 84,
                lessons: 51,
                instructor: "Jonathan Stiller",
                color: "error",
                rating: true,
              },
              {
                title: "Advanced React and Redux",
                logo: ReactLogo,
                difficulty: "Intermediate",
                category: "React Development",
                duration: "1 year",
                students: 120,
                lessons: 15,
                instructor: "Logan Xavier",
                color: "primary",
                rating: false,
              },
              {
                title: "The Complete Shopify Dropshipping Course",
                logo: ShopifyLogo,
                difficulty: "Beginner",
                category: "Shopify Development",
                duration: "6 Months",
                students: 276,
                lessons: 68,
                instructor: "Ayaan Prime",
                color: "success",
                rating: true,
              },
              {
                title: "Master Laravel for Advanced Developers",
                logo: LaravelLogo,
                difficulty: "Advance",
                category: "Laravel Development",
                duration: "2 years",
                students: 84,
                lessons: 51,
                instructor: "Jonathan Stiller",
                color: "error",
                rating: true,
              },
            ].map(
              (
                {
                  title,
                  logo,
                  difficulty,
                  category,
                  duration,
                  students,
                  lessons,
                  instructor,
                  color,
                  rating,
                },
                index
              ) => (
                <SubscriptionListCard
                  key={index}
                  title={title}
                  logo={logo}
                  difficulty={difficulty}
                  category={category}
                  duration={duration}
                  students={students}
                  lessons={lessons}
                  instructor={instructor}
                  color={color}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>
        <div className="lg:w-1/4">
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar"]}>
                <DateCalendar
                  referenceDate={dayjs("2022-04-17")}
                  views={["year", "month", "day"]}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
