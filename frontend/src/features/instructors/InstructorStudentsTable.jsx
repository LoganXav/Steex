import useTable from "../../hooks/useTable";
import Typography from "../../libs/mui/Typography";
import Table from "../../libs/react-table/Table";
import InstructorRatingChip from "./InstructorRatingChip";
import InstructorStatusChip from "./InstructorStatusChip";
import InstructorListAction from "./InstructorListAction";

const InstructorStudentsTable = () => {
  const tableInstance = useTable({ columns, data });
  return <Table instance={tableInstance} />;
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
    header: "contactNumber",
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
