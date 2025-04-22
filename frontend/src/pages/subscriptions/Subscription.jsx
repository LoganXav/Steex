import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import SubscriptionListCard from "../../features/subscriptions/SubscriptionListCard";
import SubscriptionScheduleCard from "../../features/subscriptions/SubscriptionScheduleCard";

import ReactLogo from "../../assets/react.png";
import ShopifyLogo from "../../assets/shopify.png";
import LaravelLogo from "../../assets/laravel.png";

const Subscriptions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="flex-1">
          <Paper className="p-4 flex justify-between">
            <Typography variant="h6" className="font-semibold">
              Membership Classes
            </Typography>
          </Paper>
          <div className="flex flex-col gap-4 mt-5">
            {[
              {
                title: "New Believers Orientation",
                logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Beginner",
                category: "Foundations of Faith",
                duration: "4 weeks",
                students: 30,
                lessons: 4,
                instructor: "Pastor Grace Adu",
                color: "primary",
                rating: true,
              },
              {
                title: "Baptism Preparation",
                logo: "",
                difficulty: "Intermediate",
                category: "Christian Rites",
                duration: "2 weeks",
                students: 18,
                lessons: 2,
                instructor: "Elder James Oko",
                color: "success",
                rating: false,
              },
              {
                title: "Stewardship and Giving",
                logo: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Intermediate",
                category: "Church Life",
                duration: "6 weeks",
                students: 45,
                lessons: 6,
                instructor: "Deaconess Mary Okon",
                color: "warning",
                rating: true,
              },
              {
                title: "Discovering Your Ministry",
                logo: "",
                difficulty: "Advanced",
                category: "Spiritual Gifts",
                duration: "8 weeks",
                students: 20,
                lessons: 8,
                instructor: "Pastor Emmanuel Nnaji",
                color: "error",
                rating: true,
              },
              {
                title: "Church History and Doctrine",
                logo: "",
                difficulty: "Advanced",
                category: "Theology",
                duration: "10 weeks",
                students: 16,
                lessons: 10,
                instructor: "Rev. Daniel Osei",
                color: "secondary",
                rating: false,
              },
              {
                title: "Community Outreach Strategies",
                logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Intermediate",
                category: "Evangelism",
                duration: "5 weeks",
                students: 25,
                lessons: 5,
                instructor: "Pastor Linda Okoro",
                color: "primary",
                rating: true,
              },
            ].map(({ title, logo, difficulty, category, duration, students, lessons, instructor, color, rating }, index) => (
              <SubscriptionListCard key={index} title={title} logo={logo} difficulty={difficulty} category={category} duration={duration} students={students} lessons={lessons} instructor={instructor} color={color} rating={rating} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/4">
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar"]}>
                <DateCalendar className="text-mui-primary-tertiary" referenceDate={dayjs("2023-12-15")} views={["year", "month", "day"]} />
              </DemoContainer>
            </LocalizationProvider>
          </Paper>
          <Typography variant="h6" className="font-semibold">
            Class Schedule
          </Typography>

          {[1, 2, 3].map((index) => (
            <SubscriptionScheduleCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
