import { Drawer, List, useMediaQuery } from "@mui/material";
import AppProtectedSideNavigationItem from "./AppProtectedSideNavigationItem";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "constants/Global";
import { RouteEnum } from "constants/RouterConstants";
import { Iconly } from "react-iconly";
import SteexLogo from "./assets/steex.png";

// import useAuthUser from "hooks/useAuthUser";
import useSideNavigationToggle from "./hooks/useSideNavigationToggle";
import useLogout from "./hooks/useLogout";
import Toolbar from "./libs/mui/Toolbar";
import Typography from "./libs/mui/Typography";
import Button from "./libs/mui/Button";
import IconButton from "./libs/mui/IconButton";

function AppProtectedSideNavigation() {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const [isSideNavigation, toggleSideNavigation] = useSideNavigationToggle();
  const { logout } = useLogout();

  return (
    <Drawer
      open={isSideNavigation}
      variant={islg ? "permanent" : "temporary"}
      PaperProps={{
        style: { width: APP_SIDE_MENU_WIDTH },
        className:
          "flex flex-col bg-mui-secondary-dark !bg-opacity-0 px-3 rounded-md xl:h-[85%] xl:ml-5 xl:translate-y-24 max-h-full",
      }}
      onClose={() => toggleSideNavigation()}
    >
      <Toolbar className="flex items-center justify-center mb-1">
        <div className="mx-auto w-28">
          <img src={SteexLogo} />
        </div>
      </Toolbar>
      <Typography className="text-mui-primary-tertiary" variant="caption">
        MENU
      </Typography>
      <List className="flex-1 min-h-0 mt-3">
        {LINKS.map((item, index) => {
          return <AppProtectedSideNavigationItem item={item} key={index} />;
        })}
      </List>
      <Toolbar className="p-4 flex items-center justify-between">
        <Button
          fullWidth
          variant="text"
          color="error"
          startIcon={
            <IconButton variant="soft" color="error" size="small">
              <Iconly size="small" name="Logout" />
            </IconButton>
          }
          onClick={() => logout()}
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
  { name: "Courses", to: RouteEnum.COURSES_CATEGORIES, icon: "Work" },
  { name: "Subscriptions", to: RouteEnum.SUBSCRIPTIONS, icon: "Calendar" },
  { name: "Instructors", to: RouteEnum.INSTRUCTORS, icon: "People" },
  { name: "Profile", to: RouteEnum.PROFILE, icon: "User" },
  { name: "FAQs", to: RouteEnum.CONTACT_US_FAQS, icon: "Discovery" },
];
