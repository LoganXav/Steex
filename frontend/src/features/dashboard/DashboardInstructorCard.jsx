import { ButtonBase, Typography, Avatar } from "@mui/material";
import React from "react";

const DashboardInstructorCard = ({ src, name, desc }) => {
  return (
    <ButtonBase className="flex text-start items-center rounded-md">
      <Avatar className="mr-2 w-9 h-9" src={src ? src : ""}></Avatar>
      <div>
        <Typography className="font-semibold text-black">{name}</Typography>
        <Typography className="text-mui-primary-tertiary">{desc}</Typography>
      </div>
    </ButtonBase>
  );
};

export default DashboardInstructorCard;
