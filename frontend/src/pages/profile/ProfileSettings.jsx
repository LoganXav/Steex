import PageBreadcrumbs from "../../common/PageBreadcrumbs";
import { RouteEnum } from "../../constants/RouterConstants";
import ProfileSettingsForm from "../../features/profile/ProfileSettingsForm";
import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";

const ProfileSettings = () => {
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          PROFILE SETTINGS
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Profile", to: RouteEnum.PROFILE },
            { name: "Profile Settings" },
          ]}
        />
      </Toolbar>

      <ProfileSettingsForm />
    </>
  );
};

export default ProfileSettings;
