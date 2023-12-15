import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "../constants/Global";

import "./ProtectedPageFooter.css";

function ProtectedPageFooter(props) {
  const { className, position, ...rest } = props;
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);

  return (
    <div className="bg-transparent">
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
        <Container
          maxWidth="false"
          className="py-1 rounded-none text-mui-secondary-main bg-mui-background-default"
        >
          <Toolbar>
            <Typography className="text-mui-primary-tertiary">
              {`${new Date().getFullYear()}`} @ Steex
            </Typography>
            <div className="flex-1" />
            <Typography className="text-mui-primary-tertiary">LGNX</Typography>
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
