import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import Divider from "../../libs/mui/Divider";

const SubscriptionScheduleCard = ({ key }) => {
  return (
    <>
      <Paper key={key} className="w-full flex justify-between p-4">
        <div className="flex gap-3">
          <div className="text-mui-primary-tertiary">
            <Typography>16</Typography>
            <Typography>Feb</Typography>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Typography noWrap className="font-semibold lg:w-16 2xl:w-full">
              React Development
            </Typography>
            <Typography variant="body2" className="text-mui-primary-tertiary">
              9 of 15 Lessons
            </Typography>
          </div>
        </div>
        <Typography className="text-mui-primary-tertiary">8:54 AM</Typography>
      </Paper>
    </>
  );
};

export default SubscriptionScheduleCard;
