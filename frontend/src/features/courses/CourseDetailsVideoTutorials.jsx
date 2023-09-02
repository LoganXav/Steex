import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseDetailsVideoTutorials = () => {
  return (
    <div>
      {[
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles:
            [
              "What Javascript framework shuld I learn?",
              "What Javascript framework shuld I learn?",
              "What Javascript framework shuld I learn?",
            ]
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles:
            [
              "What Javascript framework shuld I learn?",
              "What Javascript framework shuld I learn?",
              "What Javascript framework shuld I learn?",
            ]
        },
      ].map(({ category, titles }) => (

        <Accordion className="border mt-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{category}</Typography>
          </AccordionSummary>
          {titles?.map((title) => (
            <AccordionDetails className="">
              <Typography className="border p-4">
                {title}
              </Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  )
}

export default CourseDetailsVideoTutorials