import useTable from "../../hooks/useTable";
import Typography from "../../libs/mui/Typography";
import Table from "../../libs/react-table/Table";
import InstructorStatusChip from "./InstructorStatusChip";
import InstructorListAction from "./InstructorListAction";
import SearchTextField from "../../common/SearchTextField";
import { useState } from "react";

const InstructorStudentsTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const tableInstance = useTable({ columns, data: filteredData });

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.studentName.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredResults);
  };
  return (
    <>
      <SearchTextField
        placeholder="Search for student..."
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        className="my-4"
      />
      <Table instance={tableInstance} />
    </>
  );
};

export default InstructorStudentsTable;

const data = [
  {
    studentName: "Jonathan Gunn",
    emailAddress: "v9melody@email.com",
    contactNumber: "+(234) 8100063819",
    courses: 7,
    joinedDate: "09 Jan, 2023",
    status: true,
  },
  {
    studentName: "Victor Melodiaz",
    emailAddress: "v9melody@email.com",
    contactNumber: "+(234) 8100063819",
    courses: 7,
    joinedDate: "09 Jan, 2023",
    status: false,
  },
  {
    studentName: "Victor Melodiaz",
    emailAddress: "v9melody@email.com",
    contactNumber: "+(234) 8100063819",
    courses: 7,
    joinedDate: "09 Jan, 2023",
    status: true,
  },
];

const columns = [
  {
    header: "Student Name",
    accessorKey: "studentName",
    cell: ({ row }) => <Typography>{row.original.studentName}</Typography>,
  },
  {
    header: "Email Address",
    accessorKey: "emailAddress",
  },
  {
    header: "Contact Number",
    accessorKey: "contactNumber",
  },
  {
    header: "Courses",
    accessorKey: "courses",
  },
  {
    header: "Joined Date",
    accessorKey: "joinedDate",
    // cell: ({ getValue }) => (
    //   <InstructorRatingChip size="small" data={getValue()} />
    // ),
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
