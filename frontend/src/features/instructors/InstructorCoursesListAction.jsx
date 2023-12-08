import IconButton from "../../libs/mui/IconButton";
import InstructorProfileChip from "./InstructorProfileChip";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import { RouteEnum } from "../../constants/RouterConstants";

const InstructorCoursesListAction = ({ data }) => {
  return (
    <IconButton
      aria-label="view course details"
      component={Link}
      to={RouteEnum.COURSES_DETAILS}
      state={{ instructorId: data?.id }}
    >
      <InstructorProfileChip
        size="small"
        type="option"
        label={<Iconly size="small" name="Show" />}
        className="!rounded-full h-8 cursor-pointer"
      />
    </IconButton>
  );
};

export default InstructorCoursesListAction;
