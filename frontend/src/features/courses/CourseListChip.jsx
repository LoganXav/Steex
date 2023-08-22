import { Chip } from "../../libs/mui/Chip";

function CourseListChip(props) {
  const { label, status, variant, ...restProps } = props;

  return (
    <Chip
    
      label={label}
      variant={variant ? variant : "soft"}
      color={
        {
          Gain: "success",
          Loss: "error",
          Rating: "warning",
          Open: "primary",
          Close: "info",
          Close2: "secondary",
        }[status]
      }
      {...restProps}
    />
  );
}

export default CourseListChip;
