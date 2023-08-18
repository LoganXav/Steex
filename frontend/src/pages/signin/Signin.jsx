import React from "react"
import { useFormik } from "formik";
import * as yup from "yup";
// import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import PasswordTextField from "../../common/PasswordTextField";
// import { getTextFieldFormikProps } from "../../utils/FormikUtils";
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
// import { useSearchParams } from "react-router-dom";
// import { urlSearchParamsExtractor } from "utils/URLUtils";
// import { ReactComponent as GoogleSvg } from "assets/svgs/google.svg";
// import { SelfServiceAuthenticationApi } from "apis/SelfServiceAuthenticationApi";

function Signin(props) {
  // const { enqueueSnackbar } = useSnackbar();

  // const [searchParam] = useSearchParams();

  // const { username } = urlSearchParamsExtractor(searchParam, { username: "" });

  // const [
  //   selfAuthenticationLoginMutation,
  //   selfAuthenticationLoginMutationResult,
  // ] = SelfServiceAuthenticationApi.useSelfAuthenticationLoginMutation();

  // const formik = useFormik({
  //   initialValues: {
  //     username,
  //     password: "",
  //   },
  //   validateOnBlur: false,
  //   validateOnChange: false,
  //   validationSchema: yup.object({
  //     username: yup.string().label("Username").trim().required(),
  //     password: yup.string().label("Password").trim().required(),
  //   }),
  //   onSubmit: alert("hi")
    // async (values) => {
    //   try {
    //     const data = await selfAuthenticationLoginMutation({
    //       body: values,
    //     }).unwrap();
    //     enqueueSnackbar(data?.defaultUserMessage || "Login successful", {
    //       variant: "success",
    //     });
    //   } catch (error) {
    //     enqueueSnackbar(error?.defaultUserMessage || "Failed to login", {
    //       variant: "error",
    //     });
    //   }
    // },
  // });

  return (
    <AuthScaffold>
       <div class="mb-4">
          <AuthTitle>
            Welcome Back
          </AuthTitle>
          <AuthCaption>
            Sign in to continue to Steex.
          </AuthCaption>
        </div>
      <form className="block p-5">
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Username"
          placeholder="Enter your username or Email"
          // {...getTextFieldFormikProps(formik, "username")}
        />
        <PasswordTextField
          required
          fullWidth
          size="small"
          label="Password"
          margin="normal"
          placeholder="Enter your Password"
          // {...getTextFieldFormikProps(formik, "password")}
        />
        <div class="flex justify-between items-center mb-4">
          <Typography>
            <Checkbox /> Remember me
          </Typography>
            <MuiRouterLink className="text-mui-secondary-lightAlt no-underline" to={RouteEnum.FORGOT_PASSWORD}>
              Forgot Password?
            </MuiRouterLink>
        </div>

        <LoadingButton
          // loading={selfAuthenticationLoginMutationResult.isLoading}
          loadingPosition="start"
          type="submit"
          // className="my-6"
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
          <MuiRouterLink className="font-medium" to={RouteEnum.SIGNUP}>Sign Up</MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  );
}

export default Signin;
