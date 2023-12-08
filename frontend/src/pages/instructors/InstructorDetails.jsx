import { useState } from "react";
import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";
import PageBreadcrumbs from "../../common/PageBreadcrumbs";
import { RouteEnum } from "../../constants/RouterConstants";
import InstructorProfileCard from "../../features/instructors/InstructorProfileCard";

import InstructorCoursesTable from "../../features/instructors/InstructorCoursesTable";
import InstructorStudentsTable from "../../features/instructors/InstructorStudentsTable";
import { InstructorDetailsTabEnum } from "../../features/instructors/InstructorConstants";

import { useLocation } from "react-router-dom";
import Paper from "../../libs/mui/Paper";
import Tab from "../../libs/mui/Tab";
import Tabs from "../../libs/mui/Tabs";

const InstructorDetails = () => {
  // const StudentTableInstance = useTable({ studentColumns, studentData });

  const location = useLocation();

  const [activeTab, setActiveTab] = useState(InstructorDetailsTabEnum.COURSES);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const { instructorId } = location.state || {};

  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          OVERVIEW
        </Typography>
        <PageBreadcrumbs
          breadcrumbs={[
            { name: "Instructors", to: RouteEnum.INSTRUCTORS },
            { name: "Overview" },
          ]}
        />
      </Toolbar>
      <InstructorProfileCard />

      <Paper className="flex flex-col md:flex-row justify-between md:items-center p-4 my-6 ">
        <Typography variant="h6" className="font-semibold">
          Portfolio Overview
        </Typography>

        <Tabs value={activeTab} onChange={handleTabChange} className="">
          {[
            {
              value: InstructorDetailsTabEnum.COURSES,
              label: "Courses",
            },
            {
              value: InstructorDetailsTabEnum.STUDENTS,
              label: "Students",
            },
            { value: InstructorDetailsTabEnum.FEEDBACK, label: "Feedback" },
          ].map((tab) => (
            <Tab
              key={tab.label}
              value={tab.value}
              label={tab.label}
              className="text-[14px]"
            />
          ))}
        </Tabs>
      </Paper>

      {
        {
          [InstructorDetailsTabEnum.COURSES]: <InstructorCoursesTable />,
          [InstructorDetailsTabEnum.STUDENTS]: <InstructorStudentsTable />,
          // [InstructorDetailsTabEnum.FEEDBACK]: <InstructorFeedback />,
        }[activeTab]
      }
    </>
  );
};

export default InstructorDetails;
