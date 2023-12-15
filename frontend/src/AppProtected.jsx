import { lazy, useMemo, useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import {
  APP_SIDE_MENU_WIDTH,
  MediaQueryBreakpointEnum,
} from "./constants/Global";
import { Navigate, useRoutes } from "react-router-dom";
import Suspense from "./common/Suspense";
import { configureRoutes } from "./utils/RouterUtils";
import { RouteEnum } from "./constants/RouterConstants";
import ProtectedPageHeader from "./common/ProtectedPageHeader";
import ProtectedPageFooter from "./common/ProtectedPageFooter";
import AppProtectedSideNavigation from "./AppProtectedSideNavigation";

function AppProtected() {
  const isxl = useMediaQuery(MediaQueryBreakpointEnum.xl);
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);

  const [authUser, setAuthUser] = useState({
    name: "Segun",
    desc: "Rich",
  });

  const routes = useRoutes(
    useMemo(
      () => getRoutes({ authUser, redirectTo: RouteEnum.DASHBOARD }),
      [authUser]
    )
  );

  return (
    <>
      <ProtectedPageHeader elevation={0} position="fixed" />
      <AppProtectedSideNavigation />
      <div
        style={{
          marginLeft: isxl
            ? APP_SIDE_MENU_WIDTH + 30
            : islg
            ? APP_SIDE_MENU_WIDTH
            : 0,
        }}
      >
        <Container maxWidth="2xl" className="p-4 mt-16 min-h-screen">
          <Suspense>{routes}</Suspense>
        </Container>
      </div>
      <ProtectedPageFooter elevation={0} position="sticky" />
    </>
  );
}

export default AppProtected;

const getRoutes = function getRoutes({ redirectTo }) {
  return configureRoutes([
    {
      path: "*",
      element: <Navigate to={redirectTo} replace />,
    },
    {
      path: RouteEnum.DASHBOARD,
      element: lazy(() => import("pages/dashboard/Dashboard")),
    },
    {
      path: RouteEnum.COURSES.concat("/*"),
      element: lazy(() => import("pages/courses/Course")),
    },
    {
      path: RouteEnum.SUBSCRIPTIONS.concat("/*"),
      element: lazy(() => import("pages/subscriptions/Subscription")),
    },
    {
      path: RouteEnum.INSTRUCTORS.concat("/*"),
      element: lazy(() => import("pages/instructors/Instructor")),
    },
    {
      path: RouteEnum.PROFILE.concat("/*"),
      element: lazy(() => import("pages/profile/Profile")),
    },
    {
      path: RouteEnum.CONTACT_US_FAQS.concat("/*"),
      element: lazy(() => import("pages/contact-us/Faq")),
    },
  ]);
};
