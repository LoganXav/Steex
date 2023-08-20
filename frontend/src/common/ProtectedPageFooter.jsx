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
import "./ProtectedPageFooter.css";
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
function ProtectedPageFooter(props) {
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
    <div className="border-t border-dashed bg-transparent">
      <AppBar
        className={clsx("ProtectedPageFooter", className)}
        position={position}
        style={{
          left: islg ? APP_SIDE_MENU_WIDTH : 0,
          width: islg ? `calc(100% - ${APP_SIDE_MENU_WIDTH}px)` : "100%",
          ...rest,
        }}
        {...rest}
      >
        <Container maxWidth="false" className="text-mui-primary-tertiary bg-inherit">
          <Toolbar>
          <Typography>2023 @ Steex</Typography>  
          <div className="flex-1"/>
          <Typography>Design & Develop by LOGAN</Typography>  
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default ProtectedPageFooter;

/**
 * @typedef {{
 * } & import("@mui/material").AppBarProps} ProtectedPageHeaderProps
 */
