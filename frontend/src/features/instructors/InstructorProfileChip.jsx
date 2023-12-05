import { Chip } from "../../libs/mui/Chip";

function InstructorProfileChip(props) {
  const { label, status, variant, type, ...restProps } = props;

  return (
    <Chip
      label={label}
      variant={variant ? variant : "soft"}
      color={type === "language" || "option" ? "primary" : "danger"}
      {...restProps}
    />
  );
}

export default InstructorProfileChip;
