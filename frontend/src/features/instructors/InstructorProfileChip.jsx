import { Chip } from "../../libs/mui/Chip";

function InstructorProfileChip(props) {
  const { label, status, variant, type, ...restProps } = props;

  return (
    <Chip
      size="small"
      label={label}
      variant={variant ? variant : "soft"}
      color={type === "language" || "option" ? "info" : "danger"}
      className="!rounded-sm h-8 cursor-pointer"
      {...restProps}
    />
  );
}

export default InstructorProfileChip;
