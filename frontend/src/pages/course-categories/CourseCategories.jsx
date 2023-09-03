import React from "react";
import {
  Typography,
  Paper,
  Card,
  Container,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import { Link } from "react-router-dom";
import { RouteEnum } from "../../constants/RouterConstants";
import ReactLogo from "../../assets/react.png";
import ShopifyLogo from "../../assets/shopify.png";
import WebpackLogo from "../../assets/webpack.png";
import LaravelLogo from "../../assets/laravel.png";

const CourseCategories = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-bold">
          CATEGORY
        </Typography>
        <Typography variant="body2" className="text-mui-primary-tertiary">
          Courses / Category
        </Typography>
      </Toolbar>
      <Toolbar disableGutters>
        <SearchTextField
          size="small"
          className="md:w-[20rem]"
          label="Search for a category..."
          fullWidth
        />

        <div className="flex-1" />
      </Toolbar>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {[
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
          {
            category: "React Development",
            logo: ReactLogo,
            courses: 12,
            color: "primary",
          },
          {
            category: "Shopify Development",
            logo: ShopifyLogo,
            courses: 120,
            color: "success",
          },
          {
            category: "Laravel Development",
            logo: LaravelLogo,
            courses: 25,
            color: "error",
          },
        ].map(({ category, logo, courses, color }, index) => (
          <Card
          key={index}
            component={Link}
            to={RouteEnum.COURSES}
            variant="soft"
            color={color}
            className="flex flex-col gap-2 items-center py-8 rounded-md text-center transition duration-500 hover:-translate-y-3 ease"
          >
            <Paper className="rounded-md">
              <img className="w-16 h-16 p-2" src={logo} />
            </Paper>
            <Typography className="font-semibold text-black">
              {category}
            </Typography>
            <Typography variant="body2" className="text-mui-primary-tertiary">
              {courses}+ Courses Available
            </Typography>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CourseCategories;
