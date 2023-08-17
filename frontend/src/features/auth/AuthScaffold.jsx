import React from "react";
import {Typography} from "@mui/material"
import {Paper} from "@mui/material"
import { clsx } from "clsx";

function AuthScaffold(props) {
  return (
    <div className="min-h-screen flex bg-mui-primary-lightAlt">
      <div className="w-[90%] md:w-[80%] lg:w-[80%] min-h-[90vh] sm:min-h-[95vh] my-10 sm:my-12 flex sm:flex-col xl:flex-row mx-auto overflow-hidden rounded-sm" >
        <div className="xl:w-[45%] hidden sm:flex flex-1">
          <div className="w-full flex flex-col items-center justify-between text-center p-10 bg-mui-secondary-main rounded-sm">
            <div>
            <Typography color="white" variant="h4" className="font-semibold mb-2">Start your journey with us.</Typography>
            <Typography variant="subtitle1" className="text-mui-secondary-contrastText">It brings together your tasks, projects, timelines, files and more</Typography>
            </div>
            <Typography variant="subtitle1" className="text-mui-secondary-contrastText" >2023 Steex. Crafted with love by Logan</Typography>
          </div>
        </div>
        <Paper className="w-full xl:w-[55%] flex flex-col items-center justify-center text-center p-6 sm:py-12 xl:p-0">
            <div className="w-full sm:max-w-3xl xl:max-w-md">{props.children}</div>
        </Paper>
      </div>
    </div>
  );
}

export default AuthScaffold;
