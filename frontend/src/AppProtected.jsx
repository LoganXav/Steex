import { lazy, useMemo } from "react";
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
// import useAuthUser from "hooks/useAuthUser";
// import AppProtectedSideNavigation from "./AppProtectedSideNavigation";
// import useAuthUser from "./hooks/useAuthUser";
// import LoadingContent from "common/LoadingContent";
// import { SelfUserApi } from "apis/SelfUserApi";
// import { SelfClientApi } from "apis/SelfClientApi";

function AppProtected(props) {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);

//   const authUser = useAuthUser();
  const authUser = {
    name: "Segun",
    desc: "Rich"
  };

//   const userQueryResult = SelfUserApi.useGetSelfUserQuery(
//     useMemo(() => ({ path: { userId: authUser.userId } }), [authUser.userId])
//   );

//   const clientId = authUser.clients?.[0]?.id || authUser.clients?.[0];

//   const clientQueryResult = SelfClientApi.useGetSelfClientQuery(
//     useMemo(() => ({ path: { clientId } }), [clientId]),
//     { skip: !userQueryResult.data }
//   );

//   const clientImageQueryResult = SelfClientApi.useGetSelfClientImageQuery(
//     useMemo(() => ({ path: { clientId } }), [clientId]),
//     { skip: !clientQueryResult.data }
//   );

  const routes = useRoutes(
    useMemo(() => getRoutes({ authUser, redirectTo: RouteEnum.DASHBOARD }), [])
  );

  return (
    // <LoadingContent
    //   loading={
    //     userQueryResult.isLoading ||
    //     clientQueryResult.isLoading ||
    //     clientImageQueryResult.isLoading
    //   }
    //   error={
    //     userQueryResult.isError ||
    //     clientQueryResult.isError ||
    //     clientImageQueryResult.isError
    //   }
    //   onRetry={() => {
    //     if (userQueryResult.isError) {
    //       userQueryResult.refetch();
    //     }

    //     if (clientQueryResult.isError) {
    //       clientQueryResult.refetch();
    //     }

    //     if (clientImageQueryResult.isError) {
    //       clientImageQueryResult.refetch();
    //     }
    //   }}
    // >
    //   {() => (
        <>
          <ProtectedPageHeader elevation={0} position="sticky" />
          {/* <AppProtectedSideNavigation /> */}
          <div
            style={{
              marginLeft: islg ? APP_SIDE_MENU_WIDTH : 0,
            }}
          >
            <Container maxWidth="xl">
              <Suspense>{routes}</Suspense>
            </Container>
          </div>
          {/* <Suspense>
            <ProfileChangePasswordDialog
              open={authUser.firstTimeLoginRemaining}
            />
          </Suspense> */}
        </>
    //   )}
    // </LoadingContent>
  );
}

export default AppProtected;

// const ProfileChangePasswordDialog = lazy(() =>
//   import("features/profile/ProfileChangePasswordDialog")
// );

const getRoutes = function getRoutes({ authUser, redirectTo }) {
  return configureRoutes([
    {
      path: "*",
      element: <Navigate to={redirectTo} replace />,
    },
    {
      path: RouteEnum.DASHBOARD,
      element: lazy(() => import("pages/dashboard/Dashboard")),
    },
    // {
    //   path: RouteEnum.TRANSACTIONS.concat("/*"),
    //   element: lazy(() => import("pages/transaction/Transaction")),
    // },
    // {
    //   path: RouteEnum.CONTACT_US.concat("/*"),
    //   element: lazy(() => import("pages/contact/Contact")),
    // },
    // {
    //   path: RouteEnum.PROFILE.concat("/*"),
    //   element: lazy(() => import("pages/profile/Profile")),
    // },
  ]);
};
