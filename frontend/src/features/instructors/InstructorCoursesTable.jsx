import useTable from "../../hooks/useTable";
import Typography from "../../libs/mui/Typography";
import Table from "../../libs/react-table/Table";
import InstructorRatingChip from "./InstructorRatingChip";
import InstructorStatusChip from "./InstructorStatusChip";
import InstructorListAction from "./InstructorListAction";

const InstructorCoursesTable = () => {
  const tableInstance = useTable({ columns, data });
  return <Table instance={tableInstance} />;
};

export default InstructorCoursesTable;

const data = [
  {
    courseTitle: "The Complete Shopify Dropship Course",
    price: "451.32",
    duration: "6 months",
    students: 745,
    rating: 4.5,
    status: true,
  },
  {
    courseTitle: "The Complete Shopify Dropship Course",
    price: "451.32",
    duration: "6 months",
    students: 745,
    rating: 1,
    status: false,
  },
  {
    courseTitle: "The Complete Shopify Dropship Course",
    price: "451.32",
    duration: "6 months",
    students: 745,
    rating: 3.5,
    status: true,
  },
];

const columns = [
  {
    header: "Course Title",
    accessorKey: "courseTitle",
    cell: ({ row }) => <Typography>{row.original.courseTitle}</Typography>,
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Students",
    accessorKey: "students",
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
