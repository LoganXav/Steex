import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
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

const PasswordResetRequest = () => {
  return (
    <AuthScaffold>
      <div className="mb-4">
        <AuthTitle>Forgot Password?</AuthTitle>
        <AuthCaption>Reset password with Steex</AuthCaption>
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

        <LoadingButton
          // loading={selfAuthenticationLoginMutationResult.isLoading}
          loadingPosition="start"
          type="submit"
          component={Link}
          to={RouteEnum.FORGOT_PASSWORD_RESET}
          className="!my-2"
          fullWidth
          size="large"
          borderRadius="circular"
          color="primary"
        >
          Send Reset Link
        </LoadingButton>
        <Typography className="text-center mt-14">
        Wait, I remember my password... {" "}
          <MuiRouterLink className="font-medium" to={RouteEnum.SIGNIN}>Click here</MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  );
};

export default PasswordResetRequest;
