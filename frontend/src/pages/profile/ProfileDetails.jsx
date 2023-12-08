import ProfileContactCard from "../../features/profile/ProfileContactCard";
import ProfileAboutCard from "../../features/profile/ProfileAboutCard";
import Typography from "../../libs/mui/Typography";

const Profile = () => {
  return (
    <>
      <Typography variant="body1" className="my-4 font-semibold">
        PROFILE
      </Typography>
      <div className="flex flex-col md:flex-row gap-4">
        <ProfileContactCard />
        <ProfileAboutCard />
      </div>
    </>
  );
};

export default Profile;
