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
        <img className="w-full h-[13rem] object-center object-cover backdrop-saturate-400" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1050&q=80" />
        <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60" className="w-36 h-36 absolute -bottom-16 left-5" />
      </div>
      <Paper className="p-4 pt-20 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center">
              <Typography variant="h6" className="font-semibold">
                Grace Thompson
              </Typography>
              <div className="bg-[#60b460] w-2 h-2 rounded-full ml-2"></div>
            </div>
            <div className="flex flex-wrap items-center gap-2 my-2 text-mui-primary-tertiary">
              <div className="flex gap-1">
                <Iconly size="small" name="TimeCircle" />
                <Typography variant="body2" className="text-mui-primary-tertiary">
                  Lagos, Nigeria
                </Typography>
              </div>
              <div className="flex gap-1">
                <Iconly size="small" name="People" />
                <Typography variant="body2" className="text-mui-primary-tertiary">
                  3 Years Active
                </Typography>
              </div>
              <div className="flex gap-1">
                <Iconly size="small" name="Bookmark" />
                <Typography variant="body2" className="text-mui-primary-tertiary">
                  Welfare Unit
                </Typography>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <Typography>Church Member</Typography>
            <Typography className="text-mui-primary-tertiary mt-2">Grace is a dedicated member of the Welfare Unit, known for her compassion and commitment to supporting the church community.</Typography>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <Iconly size="small" name="Folder" />
              <Typography className="text-mui-primary-tertiary">B.Sc in Sociology, University of Lagos</Typography>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Typography className="text-mui-text-default">Languages</Typography>
            <div className="flex gap-2 mt-2">
              <InstructorProfileChip label="English" className="rounded-sm h-4" type="language" />
              <InstructorProfileChip label="Yoruba" className="rounded-sm h-4" type="language" />
            </div>
          </div>

          <div className="mt-4 max-w-xs">
            <Typography className="text-mui-text-default">Featured Skills</Typography>
            <div className="flex gap-2 mt-2 flex-wrap">
              <InstructorProfileChip label="Community Outreach" className="rounded-sm h-4" type="skill" />
              <InstructorProfileChip label="Event Planning" className="rounded-sm h-4" type="skill" />
              <InstructorProfileChip label="Public Speaking" className="rounded-sm h-4" type="skill" />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default InstructorProfileCard;
