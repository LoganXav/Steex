import React from "react";
import {
  Typography,
  Paper,
  Container,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import CoursesListCard from "../../features/courses/CoursesListCard";
import ReactLogo from "../../assets/react.png";
import ShopifyLogo from "../../assets/shopify.png";
import WebpackLogo from "../../assets/webpack.png";
import LaravelLogo from "../../assets/laravel.png";

const CoursesList = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-bold">
          COURSES
        </Typography>
        <Typography variant="body2" className="text-mui-primary-tertiary">Courses    /   All Courses</Typography>
      </Toolbar>
      <Paper className="">
        <Toolbar>
          <SearchTextField
            size="small"
            className="md:w-[20rem]"
            label="Search for a course..."
          />

          <div className="flex-1" />
          <FormControl className="w-28 sm:w-44">
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Status"
              size="small"
              // onChange={handleChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Paper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
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
            <CoursesListCard
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
    </>
  );
};

export default CoursesList;
