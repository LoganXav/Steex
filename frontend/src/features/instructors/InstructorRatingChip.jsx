import { Chip } from "../../libs/mui/Chip";

function InstructorRatingChip(props) {
  const { rating, ...restProps } = props;
  return (
    <Chip
      variant="soft"
      className="w-12 h-4 !rounded-md"
      color={
        {
          4.5: "success",
          1: "error",
          3.5: "warning",
        }[rating]
      }
      label={rating}
      {...restProps}
    />
  );
}

export default InstructorRatingChip;
