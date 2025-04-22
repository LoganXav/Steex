import React from "react";
import { Avatar, ButtonBase, Card, CardContent, CardActions, Typography } from "@mui/material";
import Container from "../../libs/mui/Container";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import { RouteEnum } from "../../constants/RouterConstants";
import CourseListChip from "./CourseListChip";

const CoursesListCard = ({ name, avatar, role, department, yearsActive, groupSize, eventsLed, color, active }) => {
  return (
    <Card className="border-none">
      <Container
        variant="soft"
        color={color}
        component={Link}
        to={RouteEnum.MEMBERS_DETAILS} // update to actual route
      >
        <div className="relative p-5">
          <Avatar src={avatar} className="w-20 h-20 mx-auto border-4 border-white shadow-md" />
        </div>
      </Container>
      <CardContent className="p-5 text-black">
        <div className="flex items-center justify-between mb-2">
          <CourseListChip size="small" color={active ? "Beginner" : "Advance"} label={active ? "Active" : "Inactive"} className="!rounded-sm h-4" />
          <CourseListChip size="small" color="Secondary" label={role} className="!rounded-sm h-4" />
        </div>

        <Typography noWrap className="font-semibold lg:w-44 xl:w-full">
          {name}
        </Typography>
        <Typography variant="body2" className="text-mui-primary-tertiary my-1">
          {department}
        </Typography>

        <div className="flex flex-wrap items-center gap-2 my-2 text-mui-primary-tertiary">
          <div className="flex gap-1 items-center">
            <Iconly size="small" name="TimeCircle" />
            <Typography>{yearsActive}</Typography>
          </div>
          <div className="flex gap-1 items-center">
            <Iconly size="small" name="People" />
            <Typography>{groupSize} Members</Typography>
          </div>
          <div className="flex gap-1 items-center">
            <Iconly size="small" name="Bookmark" />
            <Typography>{eventsLed} Events</Typography>
          </div>
        </div>
      </CardContent>

      {/* <CardActions className="flex justify-between items-center p-4 border-t text-black">
        <ButtonBase className="w-full flex items-center gap-2">
          <Avatar className="w-9 h-9" src={avatar} />
          <Typography noWrap className="">
            {name}
          </Typography>
        </ButtonBase>
      </CardActions> */}
    </Card>
  );
};

export default CoursesListCard;
