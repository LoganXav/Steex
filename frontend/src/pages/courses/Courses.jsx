import { lazy, useMemo } from "react";
import { RouteEnum } from "constants/RouterConstants";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouterUtils";
import Suspense from "common/Suspense";

function Courses() {
  const routes = useRoutes(useMemo(() => getRoutes(), []));

  return <Suspense>{routes}</Suspense>;
}

export default Courses;

function getRoutes() {
  return configureRoutes(
    [
      {
        path: "*",
        element: <Navigate to={RouteEnum.COURSES_CATEGORIES} replace />,
      },
      // {
      //   index: true,
      //   element: lazy(() => import("./CourseCategories")),
      // },
      {
        path: RouteEnum.COURSES_CATEGORIES,
        element: lazy(() => import("./CourseCategories")),
      },
      {
        path: RouteEnum.COURSES,
        element: lazy(() => import("./CoursesList")),
      },
      {
        path: RouteEnum.COURSES_DETAILS,
        element: lazy(() => import("./CourseDetails")),
      },
    ],
    {
      parentPath: RouteEnum.COURSES,
    }
  );
}
