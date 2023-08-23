import { Chip } from "../../libs/mui/Chip";

function CourseListChip(props) {
  const { label, rating, color, ...restProps } = props;

  return (
    <Chip
    
      label={label}
      variant={rating ? "" : "soft"}
      color={
        {
          Beginner: "success",
          Advance: "error",
          Intermediate: "primary",
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
