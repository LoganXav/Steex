import { lazy, useMemo } from "react";
import { RouteEnum } from "constants/RouterConstants";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouterUtils";
import Suspense from "common/Suspense";

function Profile() {
  const routes = useRoutes(useMemo(() => getRoutes(), []));

  return <Suspense>{routes}</Suspense>;
}

export default Profile;

function getRoutes() {
  return configureRoutes(
    [
      {
        path: "*",
        element: <Navigate to={RouteEnum.PROFILE} replace />,
      },
      // {
      //   index: true,
      //   element: lazy(() => import("./CourseCategories")),
      // },
      {
        path: RouteEnum.PROFILE,
        element: lazy(() => import("./ProfileDetails")),
      },
      {
        path: RouteEnum.PROFILE_EDIT,
        element: lazy(() => import("./ProfileEdit")),
      },
    ],
    {
      parentPath: RouteEnum.PROFILE,
    }
  );
}
