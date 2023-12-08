import React, { useState } from "react";
import {
  Card,
  Container,
  FormControl,
  InputLabel,
  Select,
  Tabs,
  Tab,
  MenuItem,
  CardContent,
  Button,
  Avatar,
  Rating,
} from "@mui/material";
import ReactLogo from "../../assets/react.png";
import CourseListChip from "../../features/courses/CourseListChip";
import { CourseDetailsTabEnum } from "features/courses/CourseConstants";
import CourseDetailsDescription from "features/courses/CourseDetailsDescription";
import CourseDetailsVideoTutorials from "features/courses/CourseDetailsVideoTutorials";
import CourseDetailsFeedback from "features/courses/CourseDetailsFeedback";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import PageBreadcrumbs from "../../common/PageBreadcrumbs";
import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";
import Paper from "../../libs/mui/Paper";

import { RouteEnum } from "../../constants/RouterConstants";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState(CourseDetailsTabEnum.DESCRIPTION);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          OVERVIEW
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Courses", to: RouteEnum.COURSES },
            { name: "Overview" },
          ]}
        />
      </Toolbar>
      <div className="flex flex-col lg:flex-row gap-4">
        <Container disableGutters className="lg:w-3/4">
          <Paper className="px-4 pt-4">
            <div className="h-[200px] sm:h-[300px] md:h-[500px] rounded-sm overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://youtube.com/embed/JDtOIc6WFF4"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <Typography variant="h5" className="font-semibold">
                  Getting Started with Javascript
                </Typography>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <Typography>React Development</Typography>
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={4}
                    readOnly
                  />
                  <Typography>4.5</Typography>
                  <CourseListChip
                    size="small"
                    color="Intermediate"
                    label="Intermediate"
                    className="!rounded-sm h-4"
                  />
                </div>
              </div>
              <CourseListChip
                size="small"
                color="Yellow"
                variant="None"
                label={<StarOutlineOutlinedIcon style={{ width: "15px" }} />}
                className="!rounded-sm h-7 cursor-pointer"
              />
            </div>

            <Tabs value={activeTab} onChange={handleTabChange} className="mt-6">
              {[
                {
                  value: CourseDetailsTabEnum.DESCRIPTION,
                  label: "Description",
                },
                {
                  value: CourseDetailsTabEnum.VIDEO_TUTORIALS,
                  label: "Video Tutorials",
                },
                { value: CourseDetailsTabEnum.FEEDBACK, label: "Feedback" },
              ].map((tab) => (
                <Tab
                  key={tab.label}
                  value={tab.value}
                  label={tab.label}
                  className="text-[14px]"
                />
              ))}
            </Tabs>
          </Paper>
          <Paper className="p-4 mt-4">
            {
              {
                [CourseDetailsTabEnum.DESCRIPTION]: (
                  <CourseDetailsDescription />
                ),
                [CourseDetailsTabEnum.VIDEO_TUTORIALS]: (
                  <CourseDetailsVideoTutorials />
                ),
                [CourseDetailsTabEnum.FEEDBACK]: <CourseDetailsFeedback />,
              }[activeTab]
            }
          </Paper>
        </Container>

        <Container disableGutters className="lg:w-1/4 flex flex-col gap-4">
          <Card className="bg-white border-none">
            <Container variant="soft" color="info">
              <div className="relative p-5">
                <img className="w-32 mx-auto opacity-20" src={ReactLogo} />
                <img
                  className="w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  src={ReactLogo}
                />
              </div>
            </Container>
            <CardContent>
              <div className="flex gap-2 items-center">
                <Typography variant="h5" className="font-semibold text-black">
                  $249.95
                </Typography>
                <Typography className="text-mui-primary-tertiary line-through">
                  $499.99
                </Typography>
              </div>
              <Typography variant="body2" color="error" className="my-2">
                10 days left at this price
              </Typography>
              <div className="w-full flex md:flex-col xl:flex-row items-center justify-center gap-3">
                <Button size="large" className=" w-full" color="primary">
                  Free Trial
                </Button>
                <Button
                  size="large"
                  className="text-white w-full"
                  color="secondary"
                >
                  Buy Now
                </Button>
              </div>
            </CardContent>
          </Card>
          <Paper className="p-4">
            <Typography variant="h6" className="font-semibold mb-2">
              This course includes
            </Typography>
            {[
              { label: "Lessons", value: 35 },
              { label: "Duration", value: "6 Months" },
              { label: "Skills", value: "Beginner" },
              { label: "Language", value: "English" },
              { label: "Certificate", value: "Yes" },
            ].map(({ label, value }, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center mt-1"
              >
                <Typography>{label}</Typography>
                <Typography className="text-mui-primary-tertiary">
                  {value}
                </Typography>
              </div>
            ))}
          </Paper>
          <Paper className="p-4">
            <div className="w-full flex justify-between items-center">
              <Typography variant="h6" className="font-semibold">
                Instructor Details
              </Typography>
              <Typography color="primary">View More</Typography>
            </div>
            <div className="flex text-start items-center my-4">
              <Avatar className="mr-2 w-10 h-10 rounded-md" src=""></Avatar>
              <div>
                <Typography className="font-semibold text-black">
                  Morgan Satterfield
                </Typography>
                <Typography className="text-mui-primary-tertiary">
                  Software Engineering
                </Typography>
              </div>
            </div>
            <Button
              size="large"
              className="w-full text-mui-info-contrastText bg-mui-info-light hover:text-white hover:bg-mui-info-contrastText"
            >
              Get in Touch
            </Button>
          </Paper>
          <Card className="bg-mui-primary-main bg-[url('https://themesbrand.com/steex/layouts/assets/images/effect-pattern/pattern.png')] bg-right bg-no-repeat bg-contain p-4">
            <Typography variant="h6" className="font-semibold text-white">
              Join Membership
            </Typography>
            <Typography className="text-mui-primary-tertiary">
              Access all courses anywhere and any time
            </Typography>
            <Button
              size="large"
              className="bg-mui-primary-lighter text-black font-semibold mt-8 max-w-sm"
            >
              Join Now
            </Button>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default CourseDetails;
