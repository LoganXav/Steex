import React from "react";
import {
  Button,
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
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <CourseListChip
            size="small"
            status="Loss"
            label="Intermediate"
            className="!rounded-sm h-4"
          />
          <CourseListChip
            size="small"
            status="Loss"
            label="Intermediate"
            className="!rounded-sm h-4"
          />
        </div>
        <Typography component="div">Advanced React and Redux</Typography>
        <Typography
          gutterBottom
          variant="body2"
          className="text-mui-primary-tertiary"
        >
          React Development
        </Typography>
        <div></div>
      </CardContent>
      <CardActions className="flex justify-between items-center p-3 border-t">
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CoursesListCard;
