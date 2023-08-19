import React from "react";
import {
  Button,
  Checkbox,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  return (
    <div className="flex gap-4 min-h-[95vh]">
      <div className="w-3/4">
        <div className="flex gap-4 h-[30rem] mb-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
            <Paper className=""></Paper>
            <Paper className=""></Paper>
            <Paper className="col-span-2"></Paper>
          </div>
          <Paper className="w-1/4"></Paper>
        </div>
        <div className="flex gap-4 h-[30rem] mb-4">
          <Paper className="flex-1"></Paper>
          <Paper className="w-1/3"></Paper>
        </div>
        <div className="h-[30rem]">
          <Paper className="w-full h-full"></Paper>
        </div>
      </div>
      <Paper className="w-1/4"></Paper>
    </div>
  );
};

export default Dashboard;
