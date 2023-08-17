import { Typography } from "@mui/material";

function AuthTitle(props) {
  return (
    <Typography
      variant="h5"
      className="!font-medium"
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export default AuthTitle;
