import React from "react";
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
  Slide,
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
import useLogout from "../hooks/useLogout";
import usePopover from "../hooks/usePopover";
import useSideNavigationToggle from "../hooks/useSideNavigationToggle";
import "./ProtectedPageHeader.css";
import SearchTextField from "./SearchTextField";
import { resolvedTailwindConfig } from "constants/Global";
import { Iconly } from "react-iconly";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import SteexLogo from "../assets/steex.png";
/**
 *
 * @param {PublicPageHeaderProps} props
 */
function ProtectedPageHeader(props) {
  const { className, position, ...rest } = props;
  const isxl = useMediaQuery(MediaQueryBreakpointEnum.xl);
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const { logout } = useLogout();

  // const authUser = useAuthUser();

  const [isSideNavigation, toggleSideNavigation] = useSideNavigationToggle();

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
          width: isxl
            ? "100%"
            : islg
            ? `calc(100% - ${APP_SIDE_MENU_WIDTH}px)`
            : "100%",
          ...rest,
        }}
        {...rest}
      >
        <Container
          maxWidth="false"
          className="py-1 bg-white border-b rounded-none text-black"
        >
          <Toolbar>
            {!islg && (
              <IconButton variant="soft" size="medium">
                <Iconly
                  size="medium"
                  name="ArrowRight"
                  onClick={() => toggleSideNavigation()}
                />
              </IconButton>
            )}
            <div className="mx-auto w-32 lg:hidden">
              <img src={SteexLogo} />
            </div>
            <SearchTextField size="small" className="hidden lg:flex" />
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <IconButton variant="soft" size="medium">
                <FullscreenExitOutlinedIcon />
              </IconButton>
              <IconButton variant="soft" size="medium">
                <WbSunnyOutlinedIcon />
              </IconButton>
              <IconButton
                variant="soft"
                size="medium"
                // onClick={infoPopover.togglePopover}
              >
                <NotificationsOutlinedIcon />
              </IconButton>
              <ButtonBase
                className="flex text-start items-center px-3 rounded-md"
                onClick={infoPopover.togglePopover}
              >
                <Avatar className="md:mr-2 w-7 h-7" src=""></Avatar>
                {ismd && (
                  <div>
                    <Typography className="font-semibold ">
                      Richard Marshall
                    </Typography>
                    <Typography className="text-mui-primary-tertiary">
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
                <Typography
                  variant="subtitle2"
                  className="font-semibold pt-4 pl-4"
                >
                  Welcome Richard!
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
