import { useFormik } from "formik"
import * as yup from "yup"
import { useSnackbar } from "notistack"
import { LoadingButton } from "@mui/lab"
import PasswordTextField from "../../common/PasswordTextField"
import { getTextFieldFormikProps } from "../../utils/FormikUtils"
import { Button, Checkbox, Divider, TextField, Typography } from "@mui/material"
import MuiRouterLink from "../../common/MuiRouterLink"
import { RouteEnum } from "../../constants/RouterConstants"
import AuthScaffold from "../../features/auth/AuthScaffold"
import AuthTitle from "features/auth/AuthTitle"
import AuthCaption from "features/auth/AuthCaption"
import CoreAuthenticationApi from "../../apis/CoreAuthenticationApi"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const [registerMutation, registerMutationMutationResult] =
    CoreAuthenticationApi.useRegisterMutation()

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      email: yup.string().label("Email").trim().email().max(40).required(),
      username: yup.string().label("Username").trim().max(40).required(),
      password: yup.string().label("Password").trim().min(6).max(10).required(),
    }),
    onSubmit: async (values) => {
      try {
        const data = await registerMutation({
          data: values,
        }).unwrap()
        enqueueSnackbar(data?.message || "Registered Successfully", {
          variant: "success",
        })
        console.log(values)
        navigate(RouteEnum.DASHBOARD)
      } catch (error) {
        enqueueSnackbar(
          error?.data?.errors?.[0]?.defaultUserMessage ||
            error?.data?.error?.defaultUserMessage ||
            error?.data?.defaultUserMessage ||
            "Invalid Crendentials",
          { variant: "error" }
        )
      }
    },
  })

  return (
    <AuthScaffold>
      <div className="mb-4">
        <AuthTitle>Create your free account</AuthTitle>
        <AuthCaption>Get your your free Steex account now</AuthCaption>
      </div>
      <form className="block p-5" onSubmit={formik.handleSubmit}>
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Email"
          placeholder="Enter your email address"
          {...getTextFieldFormikProps(formik, "email")}
        />
        <TextField
          required
          fullWidth
          size="small"
          margin="normal"
          label="Username"
          placeholder="Enter your username"
          {...getTextFieldFormikProps(formik, "username")}
        />
        <PasswordTextField
          required
          fullWidth
          size="small"
          label="Password"
          margin="normal"
          placeholder="Enter your password"
          {...getTextFieldFormikProps(formik, "password")}
        />
        <div class="my-4 text-left">
          <Typography className="italic text-mui-primary-tertiary">
            By registering you agree to the Steex{" "}
            <MuiRouterLink className="not-italic" to={RouteEnum.SIGNIN}>
              Terms of Use
            </MuiRouterLink>
          </Typography>
        </div>

        <LoadingButton
          fullWidth
          borderRadius="circular"
          size="large"
          color="primary"
          onClick={formik.handleSubmit}
          loading={formik.isSubmitting}
          loadingPosition="end"
          endIcon={<></>}
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
        <Typography className="text-center mt-14">
          Already have an Account?{" "}
          <MuiRouterLink className="font-medium" to={RouteEnum.SIGNIN}>
            Sign In
          </MuiRouterLink>
        </Typography>
      </form>
    </AuthScaffold>
  )
}

export default Signup
