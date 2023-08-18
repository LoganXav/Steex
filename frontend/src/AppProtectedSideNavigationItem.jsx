import { Icon, ListItemButton, Typography } from "@mui/material";
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
        "rounded p-4",
        !!match
          ? "bg-mui-primary-lightAlt text-mui-primary-main font-bold"
          : "text-mui-text-secondary"
      )}
      {...restProps}
    >
      <Icon className="material-symbols-outlined-fill-1">{icon}</Icon>
      <Typography className={clsx("ml-2", !!match && "font-bold")}>
        {name}
      </Typography>
    </ListItemButton>
  );
}

export default AppProtectedSideNavigationItem;
