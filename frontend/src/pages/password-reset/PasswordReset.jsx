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
        <AuthTitle>Create new password</AuthTitle>
        <AuthCaption>
          Your new password must be different from previous used password.
        </AuthCaption>
      </div>
      <form className="block p-5">
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Password"
          placeholder="Enter password"
          // {...getTextFieldFormikProps(formik, "username")}
        />
        <div class="mb-2 text-left">
          <Typography variant="body2">
            Your password must be 8-20 characters long.
          </Typography>
        </div>
        <PasswordTextField
          required
          fullWidth
          size="small"
          label="Confirm Password"
          margin="normal"
          placeholder="Confirm password"
          // {...getTextFieldFormikProps(formik, "password")}
        />
        <div class="mb-4 text-left">
          <Typography variant="body2">
            <Checkbox /> Remember me
          </Typography>
        </div>

        <LoadingButton
          // loading={selfAuthenticationLoginMutationResult.isLoading}
          loadingPosition="start"
          type="submit"
          //   className="!my-2"
          fullWidth
          size="large"
          borderRadius="circular"
          color="primary"
        >
          Reset Password
        </LoadingButton>

        <Typography variant="body2" className="text-center !mt-8">
          Wait, I remember my password... {" "}
          <MuiRouterLink to={RouteEnum.SIGNUP}>Click here</MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  );
}

export default Signin;
