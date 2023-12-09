import MenuItem from "../../libs/mui/MenuItem";
import Paper from "../../libs/mui/Paper";
import TextField from "../../libs/mui/TextField";
import Typography from "../../libs/mui/Typography";
import { getTextFieldFormikProps } from "../../utils/FormikUtils";

function ProfileSettingsPersonalDetailsForm({ formik }) {
  return (
    <>
      <Paper className="p-4 mt-4">
        <Typography className="font-semibold" variant="h6">
          Personal Details
        </Typography>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              First Name
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "firstName")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Last Name
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "lastName")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Phone Number
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "phoneNo")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Email Address
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "emailAddress")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Date of Birth
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "dateOfBirth")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Joining Date
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "joiningDate")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2">
            <Typography variant="p" className="mb-2" color="GrayText">
              Skills
            </Typography>
            <TextField
              select
              size="small"
              {...getTextFieldFormikProps(formik, "skills")}
            >
              {["Javascript", "Photoshop", "PHP", "Python"].map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Designation
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "designation")}
            ></TextField>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <Typography variant="p" className="mb-2" color="GrayText">
              Website
            </Typography>
            <TextField
              size="small"
              {...getTextFieldFormikProps(formik, "website")}
            ></TextField>
          </div>

          <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <Typography variant="p" className="mb-2" color="GrayText">
                City
              </Typography>
              <TextField
                size="small"
                {...getTextFieldFormikProps(formik, "city")}
              ></TextField>
            </div>

            <div className="flex flex-col">
              <Typography variant="p" className="mb-2" color="GrayText">
                Country
              </Typography>
              <TextField
                size="small"
                {...getTextFieldFormikProps(formik, "country")}
              ></TextField>
            </div>

            <div className="flex flex-col">
              <Typography variant="p" className="mb-2" color="GrayText">
                Zip code
              </Typography>
              <TextField
                size="small"
                {...getTextFieldFormikProps(formik, "zipCode")}
              ></TextField>
            </div>
          </div>

          <div className="flex flex-col col-span-2">
            <Typography variant="p" className="mb-2" color="GrayText">
              Description
            </Typography>
            <TextField
              multiline
              rows={4}
              size="small"
              {...getTextFieldFormikProps(formik, "description")}
            ></TextField>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default ProfileSettingsPersonalDetailsForm;
