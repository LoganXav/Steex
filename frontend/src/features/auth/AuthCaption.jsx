import { Typography } from "@mui/material";
import clsx from "clsx";

function AuthCaption(props) {
  return (
    <Typography
      {...props}
      gutterBottom
      className={clsx("text-mui-primary-tertiary", props?.className)}
    >
      {props.children}
    </Typography>
  );
}

export default AuthCaption;
