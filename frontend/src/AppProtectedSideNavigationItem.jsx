import { Icon, ListItemButton, Typography, IconButton } from "@mui/material";
import clsx from "clsx";
import { NavLink, useMatch } from "react-router-dom";

function AppProtectedSideNavigationItem(props) {
  const { name, to, end, icon, ...restProps } = props;

  const match = useMatch({ path: to, end });

  return (
    <ListItemButton
      component={NavLink}
      to={to}
      className={clsx(
        "rounded px-3 py-2",
        !!match
          ? "bg-mui-primary-light text-mui-secondary-contrastText font-bold"
          : "text-mui-text-secondary"
      )}
      {...restProps}
    >
       <IconButton size="small">
    {icon}
              </IconButton>
      <Typography className={clsx("ml-2", !!match && "font-bold")}>
        {name}
      </Typography>
    </ListItemButton>
  );
}

export default AppProtectedSideNavigationItem;
