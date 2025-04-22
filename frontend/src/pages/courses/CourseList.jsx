import { Typography, Paper, Toolbar, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import CourseListCard from "../../features/courses/CourseListCard";
// import ReactLogo from "../../assets/react.png";
// import ShopifyLogo from "../../assets/shopify.png";
// import LaravelLogo from "../../assets/laravel.png";
import { RouteEnum } from "../../constants/RouterConstants";
import PageBreadcrumbs from "../../common/PageBreadcrumbs";

const CoursesList = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          CELL GROUPS
        </Typography>
        <PageBreadcrumbs breadcrumbs={[{ name: "Cell Groups", to: RouteEnum.MEMBERS_CELL_GROUPS }, { name: "Members" }]} />
      </Toolbar>

      <Paper className="py-4 md:py-0">
        <Toolbar className="flex flex-col md:flex-row gap-2">
          <SearchTextField size="small" className="md:w-[20rem]" label="Search for a group..." fullWidth />

          <div className="flex-1" />
          <FormControl fullWidth className="md:w-28">
            <InputLabel className="text-mui-primary-tertiary">Status</InputLabel>
            <Select
              label="Status"
              size="small"
              // onChange={}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Paper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {cellGroupsMembers.map((member, index) => (
          <CourseListCard key={index} name={member.name} avatar={member.avatar} role={member.role} department={member.department} yearsActive={member.yearsActive} groupSize={member.groupSize} eventsLed={member.eventsLed} color={member.color} active={member.active} />
        ))}
      </div>
    </>
  );
};

export default CoursesList;

const cellGroupsMembers = [
  {
    name: "Grace Thompson",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Cell Leader",
    department: "Welfare Unit",
    yearsActive: "3 Years",
    groupSize: 12,
    eventsLed: 5,
    color: "success",
    active: true,
  },
  {
    name: "Michael Adenuga",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    role: "Member",
    department: "Evangelism Team",
    yearsActive: "1 Year",
    groupSize: 0,
    eventsLed: 0,
    color: "primary",
    active: false,
  },
  {
    name: "Esther Obasi",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    role: "Assistant Leader",
    department: "Prayer Unit",
    yearsActive: "2 Years",
    groupSize: 8,
    eventsLed: 3,
    color: "warning",
    active: true,
  },
  {
    name: "Chinedu Okafor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Member",
    department: "Choir",
    yearsActive: "1 Year",
    groupSize: 0,
    eventsLed: 1,
    color: "info",
    active: true,
  },
];
