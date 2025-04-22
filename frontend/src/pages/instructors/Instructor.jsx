import { lazy, useMemo } from "react";
import { RouteEnum } from "constants/RouterConstants";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouterUtils";
import Suspense from "common/Suspense";

function Instructor() {
  const routes = useRoutes(useMemo(() => getRoutes(), []));

  return <Suspense>{routes}</Suspense>;
}

export default Instructor;

function getRoutes() {
  return configureRoutes(
    [
      {
        path: "*",
        element: <Navigate to={RouteEnum.ALL_MEMBERS} replace />,
      },
      {
        path: RouteEnum.ALL_MEMBERS,
        element: lazy(() => import("./InstructorList")),
      },
      {
        path: RouteEnum.MEMBER_DETAILS,
        element: lazy(() => import("./InstructorDetails")),
      },
    ],
    {
      parentPath: RouteEnum.ALL_MEMBERS,
    }
  );
}
