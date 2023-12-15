import { Chip } from "../../libs/mui/Chip";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function CourseListChip(props) {
  const { rating, color, ...restProps } = props;

  return (
    <Chip
      label={
        rating ? (
          <StarOutlinedIcon style={{ width: "15px" }} />
        ) : (
          <StarOutlineOutlinedIcon style={{ width: "15px" }} />
        )
      }
      variant={rating ? "" : "soft"}
      color={
        {
          Beginner: "success",
          Advance: "error",
          Intermediate: "info",
          Yellow: "warning",
          Black: "secondary",
          // Blue: "info",
        }[color]
      }
      {...restProps}
    />
  );
}

export default CourseListChip;
