import Avatar from "../../libs/mui/Avatar";
import Button from "../../libs/mui/Button";
import Paper from "../../libs/mui/Paper";
import TextField from "../../libs/mui/TextField";
import Typography from "../../libs/mui/Typography";
import LoadingButton from "../../libs/mui/LoadingButton";
import { getTextFieldFormikProps } from "../../utils/FormikUtils";
import ProfileSettingsPersonalDetailsForm from "./ProfileSettingsPersonalDetailsForm";
import ProfileSettingsChangePasswordForm from "./ProfileSettingsChangePasswordForm";
import StepperButton from "../../common/StepperButton";
import useStepper from "../../hooks/useStepper";
import * as yup from "yup";
import { useFormik } from "formik";
import { RouteEnum } from "../../constants/RouterConstants";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useDataRef from "../../hooks/useDataRef";

function ProfileSettingsForm() {
  const stepper = useStepper();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Github: "",
      Website: "",
      Twitter: "",
      LinkedIn: "",
    },
    onSubmit: async (values) => {
      try {
        if (!isLastStep) {
          return stepper.next();
        }
        // const data = await authenticationMutation({
        //   data: values,
        // }).unwrap();
        console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        enqueueSnackbar("Profile Changes Successful", {
          variant: "success",
        });
        navigate(RouteEnum.PROFILE);
      } catch (error) {
        enqueueSnackbar(
          error?.data?.errors?.[0]?.defaultUserMessage ||
            error?.data?.defaultUserMessage ||
            "Could not update your profile. ",
          { variant: "error" }
        );
      }
    },
  });

  const dataRef = useDataRef({ formik });

  useEffect(() => {
    const values = dataRef.current.formik.values;
    dataRef.current.formik.setValues({
      ...values,
    });
  }, [dataRef]);

  const contentProps = {
    ...dataRef.current,
    dataRef,
  };

  const steps = [
    {
      label: "Personal Details",
      content: <ProfileSettingsPersonalDetailsForm {...contentProps} />,
    },
    {
      label: "Change Password",
      content: <ProfileSettingsChangePasswordForm {...contentProps} />,
    },
  ];

  const isFirstStep = stepper.step === 0;
  const isLastStep = stepper.step === steps.length - 1;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Paper className="w-full md:h-1/2 md:w-1/4 flex flex-col gap-4 justify-center items-center p-4">
          <div className="w-full flex flex-col items-center gap-2 border-dashed border-b py-6">
            <div className="border border-[lightgray] p-1 rounded-full w-24">
              <Avatar
                src="https://themes.themesbrand.com/steex/react/default/static/media/avatar-1.8f473ed0f0cfa8c1df8a.jpg"
                className="w-full h-full"
              ></Avatar>
            </div>
            <Typography variant="h6">Richard Marshall</Typography>
            <Typography className="text-mui-primary-tertiary">
              Web Developer
            </Typography>
            <div className="w-full flex items-center justify-center gap-3 mt-3">
              <Button size="large" className="w-full" color="primary">
                Follow
              </Button>
              <Button
                size="large"
                className="text-white w-full"
                color="secondary"
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="w-full">
            <Typography variant="h6">Portfolio</Typography>
            <div className="flex flex-col mt-4 gap-2">
              {[
                {
                  social: "Github",
                },
                {
                  social: "Website",
                },
                {
                  social: "Twitter",
                },
                {
                  social: "LinkedIn",
                },
              ].map(({ social }, index) => (
                <div
                  className="flex justify-between items-center gap-4"
                  key={index}
                >
                  {/* <div className="rounded-full bg-mui-primary-lighter w-10 h-10"></div> */}
                  <TextField
                    fullWidth
                    size="small"
                    label={social}
                    {...getTextFieldFormikProps(formik, social)}
                  ></TextField>
                </div>
              ))}
            </div>
          </div>
        </Paper>

        <div className="flex-1">
          <Paper className="flex items-center gap-6">
            {steps.map((profile, i) => (
              <StepperButton
                key={i}
                selected={stepper.step === i}
                step={i + 1}
                completed={profile.completed}
              >
                {profile.label}
              </StepperButton>
            ))}
          </Paper>

          <div>{steps?.[stepper.step]?.content}</div>

          <div className="flex">
            <div className="flex-1" />
            <div className="w-[280px] flex justify-end gap-2 my-10">
              <Button
                fullWidth
                size="large"
                color="primary"
                disabled={isFirstStep}
                onClick={stepper.previous}
              >
                Previous
              </Button>
              <LoadingButton
                fullWidth
                size="large"
                color="primary"
                onClick={formik.handleSubmit}
                loading={formik.isSubmitting}
                loadingPosition="end"
                endIcon={<></>}
              >
                {isLastStep ? "Submit" : "Next"}
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettingsForm;
