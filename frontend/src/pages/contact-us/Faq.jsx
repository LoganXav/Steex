import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Iconly } from "react-iconly";

const Faqs = () => {
  return (
    <div className="mt-8">
      {[1, 2, 3].map((index) => (
        <div key={index} className="mt-4">
          <Paper className="p-4 flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <Typography variant="h6" className="font-semibold mb-4">
                General Questions
              </Typography>
              <Typography className="text-mui-primary-tertiary">
                General knowledge is information that has been accumulated over
                time through various mediums and sources. It excludes
                specialized learning that can only be obtained with extensive
                training and information confined to a single medium.
              </Typography>
            </div>
            <div className="w-full">
              {[
                {
                  category: "What are FAQ questions?",
                  answer:
                    "An FAQ page (short for Frequently Asked Question page) is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.",
                },
                {
                  category: "What is the purpose of FAQ?",
                  answer:
                    "The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.",
                },
                {
                  category: "What are the 4  questions of design?",
                  answer:
                    "The methodology I've found most successful, has been introduced by prof Jeanne Liedtka from Darden Business School and identifies four stages: What is?, What if?, What wows?, and What works?",
                },
                {
                  category: "What are some design questions?",
                  answer:
                    "These questions will help clients feel involved with the design process, and they'll also help you brainstorm ideas and fine-tune your creative output.",
                },
                {
                  category: "What are the 4  questions of design?",
                  answer:
                    "The methodology I've found most successful, has been introduced by prof Jeanne Liedtka from Darden Business School and identifies four stages: What is?, What if?, What wows?, and What works?",
                },
              ].map(({ category, answer }, index) => (
                <Accordion key={index} className="border">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="font-semibold">
                      {category}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails className="mt-[-1rem]">
                    <Typography className="text-mui-primary-tertiary">
                      {answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
