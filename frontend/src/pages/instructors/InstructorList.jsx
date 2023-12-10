import Toolbar from "../../libs/mui/Toolbar";
import Typography from "../../libs/mui/Typography";
import Table from "../../libs/react-table/Table";
import useTable from "../../hooks/useTable";
import InstructorStatusChip from "../../features/instructors/InstructorStatusChip";
import InstructorRatingChip from "../../features/instructors/InstructorRatingChip";
import InstructorListAction from "../../features/instructors/InstructorListAction";
import SearchTextField from "../../common/SearchTextField";
import { useState } from "react";

const Instructors = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const tableInstance = useTable({ columns, data: filteredData });

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.instructor.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredResults);
  };
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          INSTRUCTORS
        </Typography>
      </Toolbar>

      <SearchTextField
        placeholder="Search for instructor..."
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        className="my-4"
      />
      <Table instance={tableInstance} />
    </>
  );
};

export default Instructors;

const data = [
  {
    id: 1,
    instructor: "John Doe",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 4.5,
    status: true,
  },
  {
    id: 2,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 1,
    status: false,
  },
  {
    id: 3,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 4,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 5,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 6,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
  {
    id: 7,
    instructor: "Logan Xavier",
    totalCourses: 13,
    students: 745,
    email: "jdoe@email.com",
    experience: "5 years",
    contact: "+(234) 9082727383",
    rating: 3.5,
    status: false,
  },
];

const columns = [
  {
    header: "Instructor",
    accessorKey: "instructor",
    cell: ({ row }) => <Typography>{row.original.instructor}</Typography>,
  },
  {
    header: "Total Courses",
    accessorKey: "totalCourses",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Experience",
    accessorKey: "experience",
  },
  {
    header: "Students",
    accessorKey: "students",
  },
  {
    header: "Contact",
    accessorKey: "contact",
  },
  {
    header: "Rating",
    accessorKey: "rating",
    cell: ({ getValue }) => (
      <InstructorRatingChip size="small" rating={getValue()} />
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => (
      <InstructorStatusChip size="small" status={getValue()} />
    ),
  },
  {
    header: "Action",
    accessorKey: "actions",
    cell: ({ row }) => <InstructorListAction data={row.original} />,
    id: "actions",
    maxSize: 40,
  },
];
