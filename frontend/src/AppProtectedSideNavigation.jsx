import {
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AppProtectedSideNavigationItem from "./AppProtectedSideNavigationItem";
// import LogoSvg from "common/LogoSvg";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "constants/Global";
import { RouteEnum } from "constants/RouterConstants";
import { Iconly } from "react-iconly";

// import useAuthUser from "hooks/useAuthUser";
// import useSideNavigationToggle from "hooks/useSideNavigationToggle";

function AppProtectedSideNavigation() {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  // const [isSideNavigation, toggleSideNavigation] = useSideNavigationToggle();
  // const authUser = useAuthUser();

  return (
    <Drawer
      // open={isSideNavigation}
      variant={islg ? "permanent" : "temporary"}
      PaperProps={{
        style: { width: APP_SIDE_MENU_WIDTH },
        className:
          "flex flex-col bg-mui-secondary-dark px-3 text-mui-primary-light",
      }}
      // onClose={() => toggleSideNavigation()}
    >
      <Toolbar className="p-4 flex items-center justify-center mb-1">
        {/* <LogoSvg /> */}
        <Typography
          color="white"
          variant="h4"
          className="font-bold text-center"
        >
          steex
        </Typography>

        {!islg && (
          <IconButton color="primary">
            <Icon>chevron_left</Icon>
          </IconButton>
        )}
      </Toolbar>
      <Typography variant="caption">MENU</Typography>
      <List className="flex-1 min-h-0 mt-3">
        {LINKS.map((item, key) => {
          return <AppProtectedSideNavigationItem {...{ ...item, key }} />;
        })}
      </List>
      <Toolbar className="p-4 flex items-center justify-between">
        <Button

          fullWidth
          variant="text"
          color="error"
          startIcon={
            <IconButton variant="soft" color="error" size="small">
              <Iconly
                size="small"
                name= "Logout"
                
                // primaryColor="black"
                // secondaryColor="black"
              />
            </IconButton>
          }
        >
          Logout
        </Button>
      </Toolbar>
    </Drawer>
  );
}

export default AppProtectedSideNavigation;

const LINKS = [
  { name: "Dashboard", to: RouteEnum.DASHBOARD, icon: "Chart" },
  { name: "Courses", to: RouteEnum.COURSES, icon: "Work" },
  { name: "Subscriptions", to: RouteEnum.SUBSCRIPTIONS, icon: "Calendar" },
  { name: "Instructors", to: RouteEnum.INSTRUCTORS, icon: "People" },
  { name: "Profile", to: RouteEnum.PROFILE, icon: "User" },
  { name: "FAQs", to: RouteEnum.CONTACT_US_FAQS, icon: "Discovery" },
];
