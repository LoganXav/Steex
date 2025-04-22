import { lazy } from "react";
import { useMemo } from "react";
import { matchPath, Navigate, useLocation, useRoutes } from "react-router-dom";
import { configureRoutes } from "./utils/RouterUtils";
import { RouteEnum } from "./constants/RouterConstants";
import { Container } from "@mui/material";
import Suspense from "./common/Suspense";

function AppPublic() {
  const location = useLocation();

  const routeConfig = useMemo(() => [{ path: RouteEnum.SIGNIN }, { path: RouteEnum.SIGNUP }, { path: RouteEnum.FORGOT_PASSWORD }, { path: RouteEnum.FORGOT_PASSWORD_RESET }, { path: RouteEnum.HOME }].find((route) => matchPath(route, location.pathname)), [location.pathname]);

  const routes = useRoutes(ROUTES);

  return (
    <>
      {(routeConfig ? !!routeConfig.content : true) ? (
        <Container className="min-h-full">
          <Suspense>{routes}</Suspense>
        </Container>
      ) : (
        <Suspense>{routes}</Suspense>
      )}
    </>
  );
}

const ROUTES = configureRoutes([
  {
    path: "*",
    element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.HOME,
    element: lazy(() => import("pages/home/Home")),
  },
  {
    path: RouteEnum.SIGNIN,
    element: lazy(() => import("pages/signin/Signin")),
  },
  {
    path: RouteEnum.SIGNUP,
    element: lazy(() => import("pages/signup/Signup")),
  },
  {
    path: RouteEnum.FORGOT_PASSWORD,
    element: lazy(() => import("pages/password-reset/PasswordResetRequest")),
  },
  {
    path: RouteEnum.FORGOT_PASSWORD_RESET,
    element: lazy(() => import("pages/password-reset/PasswordReset")),
  },
]);

export default AppPublic;
