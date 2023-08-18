import {
  AppBar,
  Avatar,
  ButtonBase,
  Container,
  Divider,
  Icon,
  IconButton,
  ListItemButton,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "../constants/Global";
import { Link } from "react-router-dom";
import { RouteEnum } from "../constants/RouterConstants";
// import useAuthUser from "../hooks/useAuthUser";
// import useLogout from "../hooks/useLogout";
import usePopover from "../hooks/usePopover";
// import useSideNavigationToggle from "../hooks/useSideNavigationToggle";
import "./ProtectedPageHeader.css";
import SearchTextField from "./SearchTextField";
import { resolvedTailwindConfig } from "constants/Global";
import { Iconly } from "react-iconly";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
/**
 *
 * @param {PublicPageHeaderProps} props
 */
function ProtectedPageHeader(props) {
  const { className, position, ...rest } = props;
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);
  // const { logout } = useLogout();

  // const authUser = useAuthUser();

  // const [isSideNavigation, toggleSideNavigation] = useSideNavigationToggle();

  const infoPopover = usePopover();

  function handleLogout() {
    infoPopover.togglePopover();
    // logout();
    alert("Logout successful");
  }

  return (
    <div className="border-b">
      <AppBar
        className={clsx("ProtectedPageHeader", className)}
        position={position}
        // style={{
        //   left: islg ? APP_SIDE_MENU_WIDTH : 0,
        //   width: islg ? `calc(100% - ${APP_SIDE_MENU_WIDTH}px)` : "100%",
        //   ...rest,
        // }}
        {...rest}
      >
        <Container maxWidth="false">
          <Toolbar>
            {ismd ? (
              <Typography
                variant="h5"
                className="mr-16 text-mui-secondary-main font-bold"
              >
                Steex
              </Typography>
            ) : (
              <IconButton variant="soft" size="medium">
                <Iconly
                  size="medium"
                  name="ArrowRight"
                  // primaryColor={
                  //   resolvedTailwindConfig.theme.colors.primary.main
                  // }
                  // secondaryColor={
                  //   resolvedTailwindConfig.theme.colors.primary.main
                  // }
                />
              </IconButton>
            )}
            <SearchTextField
              size="small"
              className="hidden md:flex w-[15rem]"
            />
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <IconButton variant="soft" size="medium">
                <FullscreenExitOutlinedIcon style={{ color: "black" }} />
              </IconButton>
              <IconButton variant="soft" size="medium">
                <WbSunnyOutlinedIcon style={{ color: "black" }} />
              </IconButton>
              <IconButton
                variant="soft"
                size="medium"
                onClick={infoPopover.togglePopover}
              >
                <Iconly
                  size="medium"
                  name="Notification"
                  primaryColor="black"
                  secondaryColor="black"
                />
                {/* <NotificationsOutlinedIcon style={{ color: "black" }}/> */}
              </IconButton>
              <ButtonBase
                className="flex text-start items-center"
                onClick={infoPopover.togglePopover}
              >
                <Avatar className="md:mr-4 w-7 h-7" src="">
                  {/* <Avatar className="ml-4" src={authUser.clients?.[0].avatar}> */}
                  {/* {authUser?.fullName?.[0]} */}
                </Avatar>
                {ismd && (
                  <div>
                    <Typography
                      variant="subtitle1"
                      className="font-semibold text-black"
                    >
                      {/* {authUser?.fullName} */}
                      Logan Xavier
                    </Typography>
                    <Typography
                      variant="body2"
                      className="font-light text-mui-secondary-contrastText"
                    >
                      {/* {authUser?.accountType} */}
                      Student
                    </Typography>
                  </div>
                )}
              </ButtonBase>
            </div>
            <Popover
              open={infoPopover.isOpen}
              anchorEl={infoPopover.anchorEl}
              onClose={infoPopover.togglePopover}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{ className: "w-[12rem] mt-1" }}
              elevation="3"
            >
              <div className="flex flex-col">
                <Typography variant="subtitle2" className="font-semibold pt-4 pl-4">
                  {/* {authUser?.firstname} {authUser?.lastname}
                    {authUser?.username} */}
                  Welcome Logan!
                </Typography>
              
              <div className="py-2">
                {[
                  {
                    icon: "User",
                    children: "Profile",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  {
                    icon: "Message",
                    children: "Messages",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  {
                    icon: "Calendar",
                    children: "Taskboard",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  {
                    icon: "InfoSquare",
                    children: "Help",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                ].map(({ icon, children, onClick, ...rest }, index) => (
                  <>
                  <ListItemButton
                    key={index}
                    className="pl-3"
                    disableGutters
                    dense="false"
                    onClick={() => {
                      infoPopover.togglePopover();
                      onClick?.();
                    }}
                    {...rest}
                  >
                    <IconButton variant="soft" size="small">
                      <Iconly size="small" name={icon} />
                    </IconButton>
                    <Typography variant="body2" className="text-mui-secondary-contrastText">{children}</Typography>
                  </ListItemButton>
                  </>
                ))}
              </div>
                  <Divider></Divider>
              <div className="py-2">
                {[
                  {
                    icon: "Ticket",
                    children: "Balance",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  {
                    icon: "Setting",
                    children: "Settings",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  {
                    icon: "Lock",
                    children: "Lock screen",
                    component: Link,
                    to: RouteEnum.DASHBOARD,
                  },
                  { icon: "Logout", children: "Logout", onClick: handleLogout },
                ].map(({ icon, children, onClick, ...rest }, index) => (
                  <>
                  <ListItemButton
                    key={index}
                    className="pl-3"
                    disableGutters
                    dense="false"
                    onClick={() => {
                      infoPopover.togglePopover();
                      onClick?.();
                    }}
                    {...rest}
                  >
                    <IconButton variant="soft" size="small">
                      <Iconly size="small" name={icon} />
                    </IconButton>
                    <Typography variant="body2" className="text-mui-secondary-contrastText">{children}</Typography>
                  </ListItemButton>
                  </>
                ))}
              </div>
              </div>
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default ProtectedPageHeader;

/**
 * @typedef {{
 * } & import("@mui/material").AppBarProps} ProtectedPageHeaderProps
 */
