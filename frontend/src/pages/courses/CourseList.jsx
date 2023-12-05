import {
  Typography,
  Paper,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import CourseListCard from "../../features/courses/CourseListCard";
import ReactLogo from "../../assets/react.png";
import ShopifyLogo from "../../assets/shopify.png";
import LaravelLogo from "../../assets/laravel.png";
import { RouteEnum } from "../../constants/RouterConstants";
import PageBreadcrumbs from "../../common/PageBreadcrumbs";

const CoursesList = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          COURSES
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Categories", to: RouteEnum.COURSES_CATEGORIES },
            { name: "Courses" },
          ]}
        />
      </Toolbar>
      <Paper className="py-4 md:py-0">
        <Toolbar className="flex flex-col md:flex-row gap-2">
          <SearchTextField
            size="small"
            className="md:w-[20rem]"
            label="Search for a course..."
            fullWidth
          />

          <div className="flex-1" />
          <FormControl fullWidth className="md:w-28">
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Status"
              size="small"
              // onChange={handleChange}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Paper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {[
          {
            title: "Advanced React and Redux",
            logo: ReactLogo,
            difficulty: "Intermediate",
            category: "React Development",
            duration: "1 year",
            students: 120,
            lessons: 15,
            instructor: "Logan Xavier",
            color: "primary",
            rating: false,
          },
          {
            title: "The Complete Shopify Dropshipping Course",
            logo: ShopifyLogo,
            difficulty: "Beginner",
            category: "Shopify Development",
            duration: "6 Months",
            students: 276,
            lessons: 68,
            instructor: "Ayaan Prime",
            color: "success",
            rating: true,
          },
          {
            title: "Master Laravel for Advanced Developers",
            logo: LaravelLogo,
            difficulty: "Advance",
            category: "Laravel Development",
            duration: "2 years",
            students: 84,
            lessons: 51,
            instructor: "Jonathan Stiller",
            color: "error",
            rating: true,
          },
          {
            title: "Advanced React and Redux",
            logo: ReactLogo,
            difficulty: "Intermediate",
            category: "React Development",
            duration: "1 year",
            students: 120,
            lessons: 15,
            instructor: "Logan Xavier",
            color: "primary",
            rating: false,
          },
          {
            title: "The Complete Shopify Dropshipping Course",
            logo: ShopifyLogo,
            difficulty: "Beginner",
            category: "Shopify Development",
            duration: "6 Months",
            students: 276,
            lessons: 68,
            instructor: "Ayaan Prime",
            color: "success",
            rating: true,
          },
          {
            title: "Master Laravel for Advanced Developers",
            logo: LaravelLogo,
            difficulty: "Advance",
            category: "Laravel Development",
            duration: "2 years",
            students: 84,
            lessons: 51,
            instructor: "Jonathan Stiller",
            color: "error",
            rating: true,
          },
          {
            title: "Advanced React and Redux",
            logo: ReactLogo,
            difficulty: "Intermediate",
            category: "React Development",
            duration: "1 year",
            students: 120,
            lessons: 15,
            instructor: "Logan Xavier",
            color: "primary",
            rating: false,
          },
          {
            title: "The Complete Shopify Dropshipping Course",
            logo: ShopifyLogo,
            difficulty: "Beginner",
            category: "Shopify Development",
            duration: "6 Months",
            students: 276,
            lessons: 68,
            instructor: "Ayaan Prime",
            color: "success",
            rating: true,
          },
          {
            title: "Master Laravel for Advanced Developers",
            logo: LaravelLogo,
            difficulty: "Advance",
            category: "Laravel Development",
            duration: "2 years",
            students: 84,
            lessons: 51,
            instructor: "Jonathan Stiller",
            color: "error",
            rating: true,
          },
        ].map(
          (
            {
              title,
              logo,
              difficulty,
              category,
              duration,
              students,
              lessons,
              instructor,
              color,
              rating,
            },
            index
          ) => (
            <CourseListCard
              key={index}
              title={title}
              logo={logo}
              difficulty={difficulty}
              category={category}
              duration={duration}
              students={students}
              lessons={lessons}
              instructor={instructor}
              color={color}
              rating={rating}
            />
          )
        )}
      </div>
    </>
  );
};

export default CoursesList;
