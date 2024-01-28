import Paper from "../../libs/mui/Paper"
import Avatar from "../../libs/mui/Avatar"
import Typography from "../../libs/mui/Typography"
import Button from "../../libs/mui/Button"
import useAuthUser from "hooks/useAuthUser"

const ProfileContactCard = () => {
  const authUser = useAuthUser()

  return (
    <Paper className="w-full md:w-1/4 flex flex-col gap-4 justify-center items-center p-4">
      <div className="w-full flex flex-col items-center gap-2 border-dashed border-b pt-10 pb-5">
        <div className="border border-[lightgray] p-1 rounded-full w-24 h-24">
          <Avatar
            src="https://themes.themesbrand.com/steex/react/default/static/media/avatar-1.8f473ed0f0cfa8c1df8a.jpg"
            className="w-full h-full"
          ></Avatar>
        </div>
        <Typography variant="h6">{authUser.username}</Typography>
        <Typography className="text-mui-primary-tertiary">
          Web Developer
        </Typography>
        <div className="w-full flex items-center justify-center gap-3 mt-3">
          <Button size="large" className="w-full" color="primary">
            Follow
          </Button>
          <Button size="large" className="text-white w-full" color="secondary">
            Contact
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Typography variant="h6">Information</Typography>
        <div className="flex flex-col mt-4 gap-2">
          {[
            {
              label: "Designation",
              value: "Web developer",
            },
            {
              label: "Phone No",
              value: "617 219 6245",
            },
            {
              label: "Birth of Date",
              value: "24 June, 1998",
            },
            {
              label: "Website",
              value: "www.logan-bay.vercel.app",
            },
            {
              label: "Email",
              value: "richardmarshall@steex.com",
            },
            {
              label: "Location",
              value: "Los Angeles, California",
            },
            {
              label: "Joining Date",
              value: "30 Oct 2023",
            },
          ].map(({ label, value }, index) => (
            <div className="flex justify-between" key={index}>
              <Typography className="font-semibold">{label}</Typography>
              <Typography className="text-mui-primary-tertiary text-end">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  )
}

export default ProfileContactCard
