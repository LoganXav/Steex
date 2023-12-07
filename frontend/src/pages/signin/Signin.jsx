import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import PasswordTextField from "../../common/PasswordTextField";
import {
  getTextFieldFormikProps,
  getCheckFieldFormikProps,
} from "../../utils/FormikUtils";
import {
  Button,
  Checkbox,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import MuiRouterLink from "../../common/MuiRouterLink";
import { RouteEnum } from "../../constants/RouterConstants";
import AuthScaffold from "../../features/auth/AuthScaffold";
import AuthTitle from "features/auth/AuthTitle";
import AuthCaption from "features/auth/AuthCaption";
import { useDispatch } from "react-redux";
import { loginAction } from "../../configs/StoreActionConfig";

function Signin(props) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "username",
      password: "password",
      rememberMe: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      username: yup.string().label("Email").trim().email().max(40).required(),
      password: yup.string().label("Password").trim().min(6).required(),
    }),
    onSubmit: async (values) => {
      try {
        // const data = await authenticationMutation({
        //   data: values,
        // }).unwrap();
        console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        dispatch(loginAction());
        enqueueSnackbar("Logged In Successful", {
          variant: "success",
        });
        navigate(RouteEnum.DASHBOARD);
      } catch (error) {
        enqueueSnackbar(
          error?.data?.errors?.[0]?.defaultUserMessage ||
            error?.data?.defaultUserMessage ||
            "Invalid Crendentials",
          { variant: "error" }
        );
      }
    },
  });

  return (
    <AuthScaffold>
      <div className="mb-4">
        <AuthTitle>Welcome Back</AuthTitle>
        <AuthCaption>Sign in to continue to Steex.</AuthCaption>
      </div>
      <form className="block p-5" onSubmit={formik.handleSubmit}>
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Username"
          placeholder="Enter your username or Email"
          {...getTextFieldFormikProps(formik, "username")}
        />
        <PasswordTextField
          required
          fullWidth
          size="small"
          label="Password"
          margin="normal"
          placeholder="Enter your Password"
          {...getTextFieldFormikProps(formik, "password")}
        />
        <div className="flex justify-between items-center mb-4">
          <Typography>
            <Checkbox {...getCheckFieldFormikProps(formik, "rememberMe")} />{" "}
            Remember me
          </Typography>
          <MuiRouterLink
            className="text-mui-primary-tertiary no-underline"
            to={RouteEnum.FORGOT_PASSWORD}
          >
            Forgot Password?
          </MuiRouterLink>
        </div>

        <LoadingButton
          // loading={selfAuthenticationLoginMutationResult.isLoading}
          loadingPosition="start"
          type="submit"
          fullWidth
          size="large"
          borderRadius="circular"
          color="primary"
        >
          Sign in
        </LoadingButton>
        <div className="my-4">
          <Divider>Sign in with</Divider>
        </div>
        <Button
          color="inherit"
          className="font-bold"
          fullWidth
          size="large"
          borderRadius="square"
          // startIcon={<GoogleSvg />}
        >
          Continue with Google
        </Button>
        <Typography className="text-center mt-14">
          Don't have an Account?{" "}
          <MuiRouterLink className="font-medium" to={RouteEnum.SIGNUP}>
            Sign Up
          </MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  );
}

export default Signin;
