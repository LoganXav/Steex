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
  rating
}) => {
  return (
    <Card>
      <Container variant="soft" color={color}>
        <div className="relative p-5">
          <img className="w-40 mx-auto opacity-20" src={logo} />
          <img
            className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src={logo}
          />
        </div>
      </Container>
      <CardContent className="p-5">
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
            label="S"
            className="!rounded-sm p-1"
          />
        </div>
        <Typography noWrap className="font-semibold lg:w-44 xl:w-full">
         {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          className="text-mui-primary-tertiary"
        >
         {category}
        </Typography>
        <div className="flex items-center gap-2 text-mui-primary-tertiary">
          <Typography variant="body2">{duration}</Typography>
          <Typography variant="body2">{students}</Typography>
          <Typography variant="body2">{lessons} Lessons</Typography>
        </div>
      </CardContent>
      <CardActions className="flex justify-between items-center p-4 border-t">
        {/* <Button size="small">Share</Button> */}
        <div className="flex items-center justify-between">
          <ButtonBase className="w-full flex items-center gap-2">
            <Avatar className="w-9 h-9" src="">
              {/* <Avatar className="ml-4" src={authUser.clients?.[0].avatar}> */}
              {/* {authUser?.fullName?.[0]} */}
            </Avatar>
            <Typography noWrap>
              {/* {authUser?.fullName} */}
             {instructor}
            </Typography>
          </ButtonBase>
        </div>
        <CourseListChip
          size="small"
          color="Black"
          label="..."
          className="!rounded-sm p-1"
          variant=""
        />
      </CardActions>
    </Card>
  );
};

export default CoursesListCard;
