import { Typography, Paper, Card, Toolbar } from "@mui/material";
import SearchTextField from "../../common/SearchTextField";
import { Link } from "react-router-dom";
import { RouteEnum } from "../../constants/RouterConstants";
// import ReactLogo from "../../assets/react.png";
// import ShopifyLogo from "../../assets/shopify.png";
// import LaravelLogo from "../../assets/laravel.png";

const CourseCategories = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          CELL GROUPS
        </Typography>
      </Toolbar>

      <Toolbar disableGutters>
        <SearchTextField size="small" className="md:w-[20rem]" label="Search for a cell group..." fullWidth />
        <div className="flex-1" />
      </Toolbar>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {cellGroups.map(({ name, members, leader, meetingDay, color }, index) => (
          <Card key={index} component={Link} to={RouteEnum.MEMBERS} variant="soft" color={color} className="flex flex-col gap-1 items-center py-6 px-4 rounded-md text-center transition duration-500 hover:-translate-y-3 ease">
            <Paper className="rounded-md">{/* <img className="w-16 h-16 p-2" src={logo} /> */}</Paper>

            <Typography className="font-semibold text-mui-text-default">{name}</Typography>

            <Typography variant="body2" className="text-mui-primary-tertiary">
              {members}+ Members
            </Typography>

            <Typography variant="body2" className="text-sm text-mui-text-secondary">
              Leader: {leader}
            </Typography>

            <Typography variant="body2" className="text-sm text-mui-text-secondary">
              Meets: {meetingDay}
            </Typography>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CourseCategories;

const cellGroups = [
  {
    name: "Youth Connect",
    // logo: YouthLogo,
    members: 18,
    leader: "John Doe",
    meetingDay: "Fridays",
    color: "primary",
  },
  {
    name: "Men of Valor",
    // // logo: MenLogo,
    members: 25,
    leader: "Samuel K.",
    meetingDay: "Wednesdays",
    color: "success",
  },
  {
    name: "Women of Grace",
    // // logo: WomenLogo,
    members: 30,
    leader: "Priscilla N.",
    meetingDay: "Thursdays",
    color: "secondary",
  },
  {
    name: "Teens Alive",
    // // logo: TeensLogo,
    members: 15,
    leader: "Karen T.",
    meetingDay: "Saturdays",
    color: "warning",
  },
  {
    name: "New Believers",
    // // logo: NewBelieversLogo,
    members: 12,
    leader: "Michael A.",
    meetingDay: "Sundays",
    color: "info",
  },
  {
    name: "Faith Builders",
    // // logo: FaithLogo,
    members: 20,
    leader: "Linda W.",
    meetingDay: "Mondays",
    color: "primary",
  },
  {
    name: "The Vine",
    // // logo: VineLogo,
    members: 22,
    leader: "Peter M.",
    meetingDay: "Tuesdays",
    color: "success",
  },
  {
    name: "Rooted in Christ",
    // // logo: RootedLogo,
    members: 14,
    leader: "Grace L.",
    meetingDay: "Thursdays",
    color: "secondary",
  },
  {
    name: "Kingdom Builders",
    // // logo: KingdomLogo,
    members: 27,
    leader: "David N.",
    meetingDay: "Fridays",
    color: "warning",
  },
  {
    name: "Salt & Light",
    // // logo: SaltLightLogo,
    members: 19,
    leader: "Sarah K.",
    meetingDay: "Saturdays",
    color: "info",
  },
  {
    name: "City on a Hill",
    // // logo: CityHillLogo,
    members: 21,
    leader: "Andrew G.",
    meetingDay: "Sundays",
    color: "primary",
  },
  {
    name: "Living Stones",
    // // logo: StonesLogo,
    members: 16,
    leader: "Becky R.",
    meetingDay: "Tuesdays",
    color: "success",
  },
  {
    name: "Chosen Generation",
    // // logo: ChosenLogo,
    members: 24,
    leader: "Victor S.",
    meetingDay: "Wednesdays",
    color: "secondary",
  },
  {
    name: "Breakthrough Group",
    // // logo: BreakthroughLogo,
    members: 28,
    leader: "Naomi F.",
    meetingDay: "Fridays",
    color: "warning",
  },
  {
    name: "Harvesters",
    // // logo: HarvestersLogo,
    members: 11,
    leader: "Daniel O.",
    meetingDay: "Mondays",
    color: "info",
  },
  {
    name: "Word Warriors",
    // // logo: WarriorsLogo,
    members: 17,
    leader: "Mercy P.",
    meetingDay: "Thursdays",
    color: "primary",
  },
  {
    name: "Firebrand",
    // // logo: FirebrandLogo,
    members: 13,
    leader: "Steve L.",
    meetingDay: "Tuesdays",
    color: "error",
  },
  // {
  //   name: "Mountain Movers",
  //   // // logo: MountainLogo,
  //   members: 23,
  //   leader: "Joy M.",
  //   meetingDay: "Wednesdays",
  //   color: "success",
  // },
  // {
  //   name: "Grace Unlimited",
  //   // // logo: GraceLogo,
  //   members: 20,
  //   leader: "Paul W.",
  //   meetingDay: "Saturdays",
  //   color: "secondary",
  // },
  // {
  //   name: "Victory Circle",
  //   // // logo: VictoryLogo,
  //   members: 26,
  //   leader: "Phoebe C.",
  //   meetingDay: "Fridays",
  //   color: "warning",
  // },
];
