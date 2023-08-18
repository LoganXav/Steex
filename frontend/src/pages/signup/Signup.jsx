import React from "react";
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

const Signup = () => {
  return (
    <AuthScaffold>
      <div className="mb-4">
        <AuthTitle>Create your free account</AuthTitle>
        <AuthCaption>Get your your free Steex account now</AuthCaption>
      </div>
      <form className="block p-5">
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Email"
          placeholder="Enter your email address"
          // {...getTextFieldFormikProps(formik, "username")}
        />
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Username"
          placeholder="Enter your username"
          // {...getTextFieldFormikProps(formik, "username")}
        />
        <PasswordTextField
          required
          fullWidth
          size="small"
          label="Password"
          margin="normal"
          placeholder="Enter your password"
          // {...getTextFieldFormikProps(formik, "password")}
        />
        <div class="my-4 text-left">
          <Typography variant="body2" className="italic">
            By registering you agree to the Steex {" "}
            <MuiRouterLink className="not-italic" to={RouteEnum.SIGNIN}>Terms of Use</MuiRouterLink>
          </Typography>
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
          Sign up
        </LoadingButton>
        <div className="my-4">
          <Divider>Create account with</Divider>
        </div>
        <div className="text-mui-primary-lightAlt">
          <Button
            color="inherit"
            className="text-mui-text-primary font-bold"
            fullWidth
            size="large"
            borderRadius="square"
            // startIcon={<GoogleSvg />}
          >
            Continue with Google
          </Button>
        </div>
        <Typography variant="body2" className="text-center mt-14">
          Already have an Account?{" "}
          <MuiRouterLink  className="font-medium" to={RouteEnum.SIGNIN}>Sign In</MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  );
};

export default Signup;
