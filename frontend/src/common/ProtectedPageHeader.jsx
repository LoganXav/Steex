import { AppBar, ButtonBase, ListItemButton, Typography, useMediaQuery } from "@mui/material";

import Container from "libs/mui/Container";
import Toolbar from "libs/mui/Toolbar";
import IconButton from "libs/mui/IconButton";
import Avatar from "libs/mui/Avatar";
import clsx from "clsx";
import { APP_SIDE_MENU_WIDTH, MediaQueryBreakpointEnum } from "constants/Global";
import { Link } from "react-router-dom";
import { RouteEnum } from "constants/RouterConstants";
import useLogout from "hooks/useLogout";
import usePopover from "hooks/usePopover";
import useSideNavigationToggle from "hooks/useSideNavigationToggle";
import "./ProtectedPageHeader.css";
import { Iconly } from "react-iconly";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import Popover from "libs/mui/Popover";
import useThemeMode from "hooks/useThemeMode";
import GreetingMessage from "./GreetingMessage";
import useAuthUser from "hooks/useAuthUser";
/**
 *
 * @param {PublicPageHeaderProps} props
 */
function ProtectedPageHeader(props) {
  const authUser = useAuthUser();

  const { className, position, ...rest } = props;
  const isxl = useMediaQuery(MediaQueryBreakpointEnum.xl);
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const { logout } = useLogout();

  const [isSideNavigation, toggleSideNavigation] = useSideNavigationToggle();
  const [themeMode, toggleThemeMode] = useThemeMode();

  const infoPopover = usePopover();

  function handleLogout() {
    infoPopover.togglePopover();
    logout();
  }

  return (
    <div>
      <AppBar
        className={clsx("ProtectedPageHeader top-0", className)}
        position={position}
        style={{
          left: isxl ? 0 : islg ? APP_SIDE_MENU_WIDTH : 0,
          width: isxl ? "100%" : islg ? `calc(100% - ${APP_SIDE_MENU_WIDTH}px)` : "100%",
          ...rest,
        }}
        {...rest}
      >
        <Container maxWidth="false" className="py-1 rounded-none text-mui-secondary-main bg-mui-background-default">
          <Toolbar>
            {!islg && (
              <IconButton variant="soft" size="medium">
                <Iconly size="medium" name="ArrowRight" onClick={() => toggleSideNavigation()} />
              </IconButton>
            )}

            <div className="hidden md:flex">
              <GreetingMessage name={authUser.username.split(" ")[0]} />
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <IconButton variant="soft" size="medium">
                <FullscreenExitOutlinedIcon />
              </IconButton>

              <IconButton variant="soft" size="medium" onClick={() => (themeMode === "dark" ? toggleThemeMode("light") : toggleThemeMode("dark"))}>
                <WbSunnyOutlinedIcon />
              </IconButton>
              <IconButton
                variant="soft"
                size="medium"
                // onClick={infoPopover.togglePopover}
              >
                <NotificationsOutlinedIcon />
              </IconButton>
              <ButtonBase className="flex text-start items-center px-3 rounded-md" onClick={infoPopover.togglePopover}>
                <Avatar className="md:mr-2 w-7 h-7" src=""></Avatar>
                {ismd && (
                  <div>
                    <Typography className="font-semibold ">{authUser.username}</Typography>
                    <Typography className="text-mui-primary-tertiary">Student</Typography>
                  </div>
                )}
              </ButtonBase>
            </div>
            <Popover open={infoPopover.isOpen} anchorEl={infoPopover.anchorEl} onClose={infoPopover.togglePopover} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }} PaperProps={{ className: "w-[12rem] mt-1" }} elevation="3">
              <div className="flex flex-col">
                <Typography variant="subtitle2" className="font-semibold pt-4 pl-4">
                  Welcome {authUser.username}!
                </Typography>
                {/* <div className="py-2">
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
                        <Typography
                          variant="body2"
                          className="text-mui-secondary-contrastText"
                        >
                          {children}
                        </Typography>
                      </ListItemButton>
                    </>
                  ))}
                </div>
                <Divider></Divider> */}
                <div className="py-2">
                  {[
                    {
                      icon: "Lock",
                      children: "Lock screen",
                      component: Link,
                      to: RouteEnum.DASHBOARD,
                    },
                    {
                      icon: "Logout",
                      children: "Logout",
                      onClick: handleLogout,
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
                        <Typography variant="body2" className="text-mui-secondary-contrastText">
                          {children}
                        </Typography>
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
