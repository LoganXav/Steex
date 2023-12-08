import Table from "../../libs/react-table/Table";
import useTable from "../../hooks/useTable";
import Typography from "../../libs/mui/Typography";
import DashboardStatusChip from "./DashboardStatusChip";

const DashboardRecentCoursesTable = () => {
  const tableInstance = useTable({ columns, data });

  return (
    <>
      <Table instance={tableInstance} />;
    </>
  );
};

export default DashboardRecentCoursesTable;

const data = [
  {
    courseTitle: "Tailwind CSS From Scratch",
    fees: "451.32",
    duration: "6 months",
    category: "Web Design",
    instructor: "Jansh Brown",
    lessons: 15,
    rating: 4.5,
    status: true,
  },
  {
    courseTitle: "Digital Marketing",
    fees: "451.32",
    duration: "6 months",
    category: "Marketing and Management",
    instructor: "Jansh Brown",
    lessons: 23,
    rating: 1,
    status: false,
  },
  {
    courseTitle: "The Complete Shopify Dropship Course",
    fees: "451.32",
    duration: "6 months",
    category: "Web Design",
    instructor: "Jansh Brown",
    lessons: 5,
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
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Instructor",
    accessorKey: "instructor",
  },
  {
    header: "Lessons",
    accessorKey: "lessons",
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Fees",
    accessorKey: "fees",
  },
  {
    header: "Rating",
    accessorKey: "rating",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => (
      <DashboardStatusChip size="small" status={getValue()} />
    ),
  },
];
