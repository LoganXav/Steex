import React from "react";
import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  Box,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Container from "../../libs/mui/Container";
import ReactLogo from "../../assets/react.png";
import CourseListChip from "./CourseListChip";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import { RouteEnum } from "../../constants/RouterConstants";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const CoursesListCard = ({
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
}) => {
  return (
    <Card className="bg-white border-none">
      <Container
        variant="soft"
        color={color}
        component={Link}
        to={RouteEnum.COURSES_DETAILS}
      >
        <div className="relative p-5">
          <img className="w-40 mx-auto opacity-20" src={logo} />
          <img
            className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={logo}
          />
        </div>
      </Container>
      <CardContent className="p-5 text-black">
        <div className="flex items-center justify-between mb-2">
          <CourseListChip
            size="small"
            color={difficulty}
            label={difficulty}
            className="!rounded-sm h-4"
          />
          <CourseListChip
            size="small"
            rating={rating}
            color="Yellow"
            label={
              rating ? (
                <StarOutlinedIcon style={{ width: "15px" }} />
              ) : (
                <StarOutlineOutlinedIcon style={{ width: "15px" }} />
              )
            }
            className="!rounded-sm h-7 cursor-pointer"
          />
        </div>
        <Typography noWrap className="font-semibold lg:w-44 xl:w-full">
          {title}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          className="text-mui-primary-tertiary my-1"
        >
          {category}
        </Typography>
        <div className="flex flex-wrap items-center gap-2 my-2 text-mui-primary-tertiary">
          <div className="flex gap-1">
            <Iconly size="small" name="TimeCircle" />
            <Typography>{duration}</Typography>
          </div>
          <div className="flex gap-1">
            <Iconly size="small" name="People" />
            <Typography>{students}</Typography>
          </div>
          <div className="flex gap-1">
            <Iconly size="small" name="Bookmark" />
            <Typography>{lessons} Lessons</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions className="flex justify-between items-center p-4 border-t text-black">
        {/* <Button size="small">Share</Button> */}
        <div className="flex items-center justify-between">
          <ButtonBase className="w-full flex items-center gap-2">
            <Avatar className="w-9 h-9" src="">
              {/* <Avatar className="ml-4" src={authUser.clients?.[0].avatar}> */}
              {/* {authUser?.fullName?.[0]} */}
            </Avatar>
            <Typography noWrap className="max-w-10">
              {/* {authUser?.fullName} */}
              {instructor}
            </Typography>
          </ButtonBase>
        </div>
        {/* <CourseListChip
          size="small"
          color="Black"
          label="..."
          className="!rounded-sm p-1"
          variant=""
        /> */}
      </CardActions>
    </Card>
  );
};

export default CoursesListCard;
