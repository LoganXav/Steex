import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";
import PageBreadcrumbs from "../../common/PageBreadcrumbs";
import { RouteEnum } from "../../constants/RouterConstants";
import InstructorProfileCard from "../../features/instructors/InstructorProfileCard";
const InstructorDetails = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          OVERVIEW
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Instructors", to: RouteEnum.INSTRUCTORS },
            { name: "Overview" },
          ]}
        />
      </Toolbar>
      <InstructorProfileCard />
    </>
  );
};

export default InstructorDetails;
