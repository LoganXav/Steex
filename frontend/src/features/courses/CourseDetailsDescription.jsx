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
  Tabs,
  Tab,
  MenuItem,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";

const CourseDetailsDescription = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h6" className="font-semibold">
        Overview
      </Typography>
      <div>
        <Typography className="text-mui-primary-tertiary">
          JavaScript is a programming language commonly used for web
          development, among many other things. It works in conjunction with
          HTML and CSS to add dynamic functionality to websites. JavaScript is
          the sauce of the web. It is what makes things dance. JavaScript
          enables web pages to do things like display updated content, show maps
          that you can interact with, and many other things.
        </Typography>
        <Typography className="text-mui-primary-tertiary">
          Today we are going to learn how to learn JavaScript faster so that you
          can command JavaScript as you please and use it effectively in your
          projects.
        </Typography>
      </div>
      <Typography variant="h6" className="font-semibold">
        What We'll Cover in this Video
      </Typography>
      <Typography variant="h6" className="font-semibold">
        How to Practice Coding in JavaScript
      </Typography>
      <div>
        <Typography className="text-mui-primary-tertiary">
          Practicing is what makes you progress. Whether it's in music, dancing,
          singing, playing basketball – or coding.
        </Typography>
        <Typography className="text-mui-primary-tertiary">
          Practicing is really repetitive and can be tiring, but it is what
          helps us and sets us apart in the long run. It is through the action
          of practicing and repetition that we are able to be good at all these
          activities. Coding is not different.
        </Typography>
      </div>
      <Typography variant="h6" className="font-semibold">
        Work through Courses and Tutorials
      </Typography>
      <div>
        <Typography className="text-mui-primary-tertiary">
          Courses and tutorials are a good way to learn. You can find various
          learning materials from a lot of places on the web. If you would like
          to take a course on a particular programming language, you can find
          them on sites like LinkedIn.
        </Typography>
        <Typography className="text-mui-primary-tertiary">
          If you like videos, there are many great channels on YouTube that post
          coding tutorials for free. My favorite one-stop-shop is Themesbrand.
        </Typography>
      </div>
    </div>
  );
};

export default CourseDetailsDescription;
