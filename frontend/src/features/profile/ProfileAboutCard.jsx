import { Link } from "react-router-dom";
import Button from "../../libs/mui/Button";
import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import InstructorProfileChip from "../instructors/InstructorProfileChip";
import { RouteEnum } from "../../constants/RouterConstants";

const ProfileAboutCard = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <div className="flex-1" />
        <Button component={Link} to={RouteEnum.PROFILE_EDIT}>
          Edit Profile
        </Button>
      </div>
      <Paper className="flex flex-col gap-4 p-4 mt-4">
        <Typography variant="h6">Media</Typography>
        <div>
          <Typography variant="h6" className="mb-2">
            About Us
          </Typography>
          <Typography className="text-mui-primary-tertiary">
            A Web Developer creates and designs different websites for clients.
            They are responsible for their aesthetic as well as their function.
            Professionals in this field may also need to be able to ensure sites
            are compatible with multiple types of media. Web Developers need to
            have a firm understanding of programming and graphical design.
            Having a strong resume that emphasizes these attributes makes it
            significantly easier to get hired as a Web Developer.
          </Typography>
          <Typography className="text-mui-primary-tertiary">
            As a web designer, my objective is to make a positive impact on
            clients, co-workers, and the Internet using my skills and experience
            to design compelling and attractive websites. Solving code problems.
            Editing & Design with designing team in the company to build perfect
            web designs.
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <Typography>Languages</Typography>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3].map((i) => (
                <InstructorProfileChip
                  key={i}
                  label="English"
                  className="rounded-sm h-4"
                  type="language"
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Typography>Skills & Knowledge</Typography>
            <div className="flex gap-2 mt-2 flex-wrap">
              {[1, 2, 3].map((i) => (
                <InstructorProfileChip
                  key={i}
                  label="Shopify Development"
                  className="rounded-sm h-4"
                  type="skill"
                />
              ))}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ProfileAboutCard;
