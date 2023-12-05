import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";
import PageBreadcrumbs from "../../common/PageBreadcrumbs";
import { RouteEnum } from "../../constants/RouterConstants";
const Instructors = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          INSTRUCTORS
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Dashboard", to: RouteEnum.DASHBOARD },
            { name: "Instructors", to: RouteEnum.INSTRUCTORS_DETAILS },
            { name: "Test" },
          ]}
        />
      </Toolbar>
    </>
  );
};

export default Instructors;
