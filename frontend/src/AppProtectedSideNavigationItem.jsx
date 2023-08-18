import { Icon, ListItemButton, Typography, IconButton } from "@mui/material";
import clsx from "clsx";
import { NavLink, useMatch } from "react-router-dom";
import { Iconly } from "react-iconly";

function AppProtectedSideNavigationItem(props) {
  const { name, to, end, icon, ...restProps } = props;

  const match = useMatch({ path: to, end });

  return (
    <ListItemButton
      component={NavLink}
      to={to}
      className={clsx(
        "rounded px-0 py-2",
        !!match
          ? "bg-mui-secondary-lightAlt text-mui-primary-lighter"
          : "text-mui-primary-light hover:text-mui-primary-lighter transition ease duration-150 "
      )}
      {...restProps}
    >
      {/* <IconButton variant="soft" size="small">{icon}</IconButton> */}
      <IconButton variant="soft" color="inherit" size="small">
        <Iconly
          size="small"
          name={icon}
          // primaryColor="black"
          // secondaryColor="black"
        />
      </IconButton>
      <Typography
        className={clsx(
          "ml-2",
          !!match && "font-semibold text-mui-primary-lighter"
        )}
      >
        {name}
      </Typography>
    </ListItemButton>
  );
}

export default AppProtectedSideNavigationItem;
