import { Chip } from "../../libs/mui/Chip";

function DashboardChip(props) {
  const { label, status, ...restProps } = props;

  return (
    <Chip
    
      label={label}
      variant="soft"
      color={
        {
          Gain: "success",
          Loss: "error",
          Rating: "warning",
          Open: "primary",
          Close: "error",
        }[status]
      }
      {...restProps}
    />
  );
}

export default DashboardChip;
