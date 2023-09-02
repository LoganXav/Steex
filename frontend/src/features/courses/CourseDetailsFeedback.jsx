import React from 'react'
import {
  Button,
  Chip,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Rating,
} from "@mui/material";
import { Iconly } from "react-iconly";
import useToggle from "../../hooks/useToggle";
import CourseDetailsFeedbackDialogue from "./CourseDetailsFeedbackDialogue";


const CourseDetailsFeedback = () => {

  const [isAddFeedback, toggleAddFeedback] = useToggle();

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <Typography variant="h6" className="font-semibold">
          Ratings & Reviews
        </Typography>
        <Button size="large" onClick={toggleAddFeedback} color="primary" startIcon={
          <Iconly
            name="Plus"
            size="small"
            set="lightBorder"
            primaryColor="white"
            secondaryColor="white"
          />
        }>
          Give Feedback
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
        <div className='flex lg:w-1/4 flex-col items-center text-center pt-8'>
          <Typography><span className="font-bold text-3xl">4.0</span> / 5.0</Typography>
          <Rating
            name="simple-controlled"
            value={4}
            className="mt-4"
            readOnly
          />
          <Typography>10 comments</Typography>
        </div>
        <div className="w-full max-h-[25rem] overflow-y-scroll custom-scrollbar">

          <div className="w-full border-dashed border rounded-md p-4 mb-4">
            <div className="flex w-full justify-between items-center flex-wrap mb-5">
              <div className="flex items-center gap-4">
                <Chip color="error" variant="soft" label="4.5" className="h-5"
                />
                <div className="h-6 border-l" />
                <Typography color="primary">

                  Jansh Brown
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <Typography className="mr-1 text-mui-primary-tertiary">08 Mar, 2023</Typography>
                <Chip variant="soft" label="Edit" className="h-4 rounded-sm"
                />
                <Chip color="error" variant="soft" label="D" className="h-4 rounded-sm"
                />
              </div>
            </div>
            <Typography variant="h6" className="font-bold">Course Complexity</Typography>
            <Typography className="mt-2">"This is an incredible framework worth so much in the right hands! Nowhere else are you going to get so much flexibility and great code for a few dollars. Highly recommend purchasing today! Like right now!"</Typography>
          </div>
        </div>
      </div>
      {isAddFeedback && (
        <CourseDetailsFeedbackDialogue open={isAddFeedback} onClose={toggleAddFeedback} title="Give Feedback" />
      )}
    </>
  )
}

export default CourseDetailsFeedback