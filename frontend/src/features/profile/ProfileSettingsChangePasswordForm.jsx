import PasswordTextField from "../../common/PasswordTextField";
import Paper from "../../libs/mui/Paper";
import Typography from "../../libs/mui/Typography";
import { getTextFieldFormikProps } from "../../utils/FormikUtils";

function ProfileSettingsChangePasswordForm({ formik }) {
  return (
    <>
      <Paper className="p-4 mt-4">
        <Typography className="font-semibold" variant="h6">
          Changes Password
        </Typography>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col">
            <Typography variant="p" color="GrayText">
              Old Password*
            </Typography>
            <PasswordTextField
              required
              fullWidth
              size="small"
              margin="normal"
              placeholder="Enter your current password"
              {...getTextFieldFormikProps(formik, "currentPassword")}
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="p" color="GrayText">
              New Password*
            </Typography>
            <PasswordTextField
              required
              fullWidth
              size="small"
              margin="normal"
              placeholder="Enter new password"
              {...getTextFieldFormikProps(formik, "newPassword")}
            />
          </div>
          <div className="flex flex-col">
            <Typography variant="p" color="GrayText">
              Confirm Password*
            </Typography>
            <PasswordTextField
              required
              fullWidth
              size="small"
              margin="normal"
              placeholder="Confirm password"
              {...getTextFieldFormikProps(formik, "confirmPassword")}
            />
          </div>
        </div>
      </Paper>
    </>
  );
}

export default ProfileSettingsChangePasswordForm;
