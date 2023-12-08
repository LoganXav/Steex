import { Chip } from "../../libs/mui/Chip";

function DashboardStatusChip(props) {
  const { status, ...restProps } = props;

  return (
    <Chip
      variant="soft"
      color={status ? "info" : "error"}
      label={status ? "Open" : "Closed"}
      {...restProps}
    />
  );
}

export default DashboardStatusChip;
