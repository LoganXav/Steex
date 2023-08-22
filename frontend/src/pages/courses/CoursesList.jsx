import React from "react";
import { Typography, Paper, Container, Toolbar } from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import CoursesListCard from "../../features/courses/CoursesListCard";

const CoursesList = () => {
  return (
    <div className="mt-16">
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="h6" className="font-semibold">
         COURSES
        </Typography>
        <Typography className="text-mui-primary-tertiary">Courses</Typography>
      </Toolbar>
      <Paper className="">
        <Toolbar>
          <SearchTextField
            size="small"
            className="hidden lg:flex w-[15rem]"
            label="Search for a course"
          />

          <div className="flex-1" />
          <div>hi</div>
        </Toolbar>
      </Paper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
        <CoursesListCard />
      </div>
    </div>
  );
};

export default CoursesList;
