import React from "react";
import {
  Typography,
  Card,
  Paper,
  Container,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import ReactLogo from "../../assets/react.png";

const CourseDetails = () => {
  return (
    <div>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-bold">
          OVERVIEW
        </Typography>
        <Typography variant="body2" className="text-mui-primary-tertiary">
          Courses / Overview
        </Typography>
      </Toolbar>
      <div className="flex flex-col lg:flex-row gap-4">
        <Container className="lg:w-3/4">
          <Paper></Paper>
        </Container>

        <Container className="lg:w-1/4 flex flex-col gap-4">
          <Card className="bg-white border-none">
            <Container variant="soft" color="priimary">
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
              <div className="w-full flex items-center justify-center gap-3">
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
                <Typography variant="body2">{label}</Typography>
                <Typography variant="body2" className="text-mui-primary-tertiary">
                  {value}
                </Typography>
              </div>
            ))}
          </Paper>
          <Paper className="p-4">
            <div className="w-full flex justify-between items-center mb-3">
              <Typography variant="h6" className="font-semibold">
                Instructor Details
              </Typography>
              <Typography color="primary">View More</Typography>
            </div>
            <div className="flex text-start items-center my-6">
              <Avatar className="mr-2 w-12 h-12 rounded-md" src=""></Avatar>
              <div>
                <Typography className="font-semibold text-black">
                  Morgan Satterfield
                </Typography>
                <Typography className="text-mui-primary-tertiary">
                  Software Engineering
                </Typography>
              </div>
            </div>
            <Button size="large" className="w-full" color="primary">
              Get in Touch
            </Button>
          </Paper>
          <Card className="bg-mui-primary-main bg-[url('https://themesbrand.com/steex/layouts/assets/images/effect-pattern/pattern.png')] bg-right bg-no-repeat bg-contain p-4">
              <Typography variant="h6" className="font-semibold text-white">Join Membership</Typography>
              <Typography className="text-mui-primary-tertiary">Access all courses anywhere and any time</Typography>
            <Button size="large" className="bg-mui-primary-lighter text-black font-semibold mt-8 max-w-sm">
            Join Now
            </Button>

          </Card>
        </Container>
      </div>
    </div>
  );
};

export default CourseDetails;
