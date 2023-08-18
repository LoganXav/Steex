import {
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import AppProtectedSideNavigationItem from "./AppProtectedSideNavigationItem";
// import LogoSvg from "common/LogoSvg";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "constants/Global";
import { RouteEnum } from "constants/RouterConstants";
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
        className: "flex flex-col",
      }}
      // onClose={() => toggleSideNavigation()}
    >
      <Toolbar className="p-4 flex items-center justify-between">
        {/* <LogoSvg /> */}
        {!islg && (
          <IconButton color="primary">
            <Icon>chevron_left</Icon>
          </IconButton>
        )}
      </Toolbar>
      <List className="p-4 flex-1 min-h-0">
        {LINKS.map((item, key) => {
          return (
            <AppProtectedSideNavigationItem
              {...{ ...item, key,  }}
            />
          );
        })}
      </List>
      <Toolbar className="p-4 flex items-center justify-between">
        <Button variant="text" color="error" startIcon={<Icon>logout</Icon>}>
          Logout
        </Button>
      </Toolbar>
    </Drawer>
  );
}

export default AppProtectedSideNavigation;

const LINKS = [
  { name: "Overview", to: RouteEnum.DASHBOARD, icon: "speed" },
  { name: "Transactions", to: RouteEnum.TRANSACTIONS, icon: "description" },
  { name: "Contact Us", to: RouteEnum.CONTACT_US, icon: "group" },
  { name: "Profile", to: RouteEnum.PROFILE, icon: "person" },
  { name: "Settings", to: RouteEnum.SETTINGS, icon: "settings" },
];
