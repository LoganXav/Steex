import { ListItemButton } from "@mui/material";
import clsx from "clsx";
import { NavLink, useMatch } from "react-router-dom";
import { Iconly } from "react-iconly";
import Typography from "./libs/mui/Typography";
import IconButton from "./libs/mui/IconButton";

function AppProtectedSideNavigationItem({ item, index }) {
  const { name, to, end, icon } = item;

  const match = useMatch({ path: to, end });

  return (
    <ListItemButton
      component={NavLink}
      key={index}
      to={to}
      className={clsx(
        "rounded px-0 py-2",
        match
          ? "bg-mui-secondary-dark"
          : "text-mui-primary-tertiary hover:text-mui-primary-contrastText transition ease duration-150 "
      )}
    >
      <IconButton variant="soft" color="inherit" size="small">
        <Iconly size="small" name={icon} />
      </IconButton>
      <Typography
        className={clsx(
          "ml-2 text-mui-primary-tertiary",
          !!match && "font-semibold text-white"
        )}
      >
        {name}
      </Typography>
    </ListItemButton>
  );
}

export default AppProtectedSideNavigationItem;
