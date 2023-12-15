import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import Button from "../../libs/mui/Button";
import Avatar from "../../libs/mui/Avatar";
import InstructorProfileChip from "./InstructorProfileChip";
import { Iconly } from "react-iconly";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const InstructorProfileCard = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 bg-mui-primary-main opacity-70"></div>
        <img
          className="w-full h-[13rem] object-center object-cover backdrop-saturate-400"
          src="https://themes.themesbrand.com/steex/react/default/static/media/img-01.1fab3e04acb0f4283db5.jpg"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D"
          className="w-36 h-36 absolute -bottom-16 left-5"
        />
      </div>
      <Paper className="p-4 pt-20 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center">
              <Typography variant="h6" className="font-semibold">
                Ayaan Bowen
              </Typography>
              <div className="bg-[#60b460] w-2 h-2 rounded-full ml-2"></div>
            </div>
            <div className="flex flex-wrap items-center gap-2 my-2 text-mui-primary-tertiary">
              <div className="flex gap-1">
                <Iconly size="small" name="TimeCircle" />
                <Typography
                  variant="body2"
                  className="text-mui-primary-tertiary"
                >
                  Pheonix, USA
                </Typography>
              </div>
              <div className="flex gap-1">
                <Iconly size="small" name="People" />
                <Typography
                  variant="body2"
                  className="text-mui-primary-tertiary"
                >
                  874 Students
                </Typography>
              </div>
              <div className="flex gap-1">
                <Iconly size="small" name="Bookmark" />
                <Typography
                  variant="body2"
                  className="text-mui-primary-tertiary"
                >
                  231 Courses
                </Typography>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <Typography>Shopify Developer</Typography>
            <Typography className="text-mui-primary-tertiary mt-2">
              Shopify developers are experts in building online stores, themes
              and apps using the shopify platform.
            </Typography>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <Iconly size="small" name="Folder" />
              <Typography className="text-mui-primary-tertiary">
                Master of Engineering in California State University System
              </Typography>
            </div>
            <div className="flex gap-3 items-center mt-4">
              <Button>Connect</Button>
              <InstructorProfileChip
                label={
                  <MessageOutlinedIcon
                    style={{ width: "15px", color: "grey" }}
                  />
                }
              />
              <InstructorProfileChip
                type="option"
                label={<MoreVertIcon style={{ width: "15px" }} />}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Typography className="text-mui-text-default">Languages</Typography>

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

          <div className="mt-4 max-w-xs">
            <Typography className="text-mui-text-default">
              Featured Skills
            </Typography>
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

export default InstructorProfileCard;
