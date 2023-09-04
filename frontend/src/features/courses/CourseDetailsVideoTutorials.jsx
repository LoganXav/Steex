import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Iconly } from "react-iconly";

const CourseDetailsVideoTutorials = () => {
  return (
    <div>
      {[
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles:
            [
              "What Javascript framework should I learn?",
              "What Javascript framework should I learn?",
              "What Javascript framework should I learn?",
            ]
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles:
            [
              "What Javascript framework should I learn?",
              "What Javascript framework should I learn?",
              "What Javascript framework should I learn?",
            ]
        },
      ].map(({ category, titles }) => (

        <Accordion className="border mt-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{category}</Typography>
          </AccordionSummary>
          {titles?.map((title) => (
            <AccordionDetails className="mt-[-1rem]">
              <div className="flex justify-between items-center border p-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Iconly
                    size="medium"
                    name="Play"
                  />
                  <Typography>
                    {title}
                  </Typography>
                </div>
                <Typography>
                  03:20 min
                </Typography>

              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  )
}

export default CourseDetailsVideoTutorials