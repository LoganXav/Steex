import { Typography } from "@mui/material";
import clsx from "clsx";

function AuthCaption(props) {
  return (
    <Typography
      {...props}
      gutterBottom
      className={clsx("text-mui-text-secondary", props?.className)}
    >
      {props.children}
    </Typography>
  );
}

export default AuthCaption;
