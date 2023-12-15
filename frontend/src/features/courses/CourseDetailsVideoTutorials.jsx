import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Iconly } from "react-iconly";

const CourseDetailsVideoTutorials = () => {
  return (
    <div>
      {[
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles: [
            "What Javascript framework should I learn?",
            "What Javascript framework should I learn?",
          ],
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles: ["What Javascript framework should I learn?"],
        },
        {
          category: "Introduction to Javascript + Setup (4 Lessons)",
          titles: [
            "What Javascript framework should I learn?",
            "What Javascript framework should I learn?",
            "What Javascript framework should I learn?",
          ],
        },
      ].map(({ category, titles }, index) => (
        <Accordion key={index} className="border mt-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{category}</Typography>
          </AccordionSummary>
          {titles?.map((title, index) => (
            <AccordionDetails key={index} className="mt-[-1rem]">
              <div className="flex justify-between border p-2 sm:p-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Iconly size="medium" name="Play" />
                  <Typography className="text-mui-primary-tertiary">
                    {title}
                  </Typography>
                </div>
                <Typography noWrap className="text-mui-primary-tertiary">
                  03:20 min
                </Typography>
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default CourseDetailsVideoTutorials;
