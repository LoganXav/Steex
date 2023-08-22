import React from "react";
import {
  Avatar,
  Button,
  ButtonBase,
  Container,
  Card,
  Box,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import ReactLogo from "../../assets/react.png";
import CourseListChip from "./CourseListChip";

const CoursesListCard = ({}) => {
  return (
    <Card>
      <Container variant="soft" color="primary">
        <div className="relative p-5">
          <img className="w-40 mx-auto opacity-20" src={ReactLogo} />
          <img
            className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={ReactLogo}
          />
        </div>
      </Container>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <CourseListChip
            size="small"
            status="Loss"
            label="Intermediate"
            className="!rounded-sm h-4"
          />
          <CourseListChip
            size="small"
            status="Rating"
            label="S"
            className="!rounded-sm p-1"
            variant=""
          />
        </div>
        <Typography noWrap className="font-semibold lg:w-44 xl:w-full">Advanced React and Redux Advanced React and Redux</Typography>
        <Typography
          gutterBottom
          variant="body2"
          className="text-mui-primary-tertiary"
        >
          React Development
        </Typography>
        <div className="flex items-center gap-2 text-mui-primary-tertiary">
          <Typography variant="body2">6 Months</Typography>
          <Typography variant="body2">256</Typography>
          <Typography variant="body2">15 Lessons</Typography>
        </div>
      </CardContent>
      <CardActions className="flex justify-between items-center p-4 border-t">
        {/* <Button size="small">Share</Button> */}
        <div className="flex items-center justify-between">
          <ButtonBase className="flex items-center gap-2">
            <Avatar className="w-9 h-9" src="">
              {/* <Avatar className="ml-4" src={authUser.clients?.[0].avatar}> */}
              {/* {authUser?.fullName?.[0]} */}
            </Avatar>
            <Typography className="">
              {/* {authUser?.fullName} */}
              Logan Xavier
            </Typography>
          </ButtonBase>
        </div>
        <CourseListChip
            size="small"
            // color="black"
            label="..."
            className="!rounded-sm p-1"
            variant=""
          />
      </CardActions>
    </Card>
  );
};

export default CoursesListCard;
