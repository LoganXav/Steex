import { Chip } from "../../libs/mui/Chip";

function InstructorStatusChip(props) {
  const { status, ...restProps } = props;

  return (
    <Chip
      variant="soft"
      color={status ? "success" : "error"}
      label={status ? "Active" : "Inactive"}
      {...restProps}
    />
  );
}

export default InstructorStatusChip;
