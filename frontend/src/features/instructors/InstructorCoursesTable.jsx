import useTable from "../../hooks/useTable";
import Typography from "../../libs/mui/Typography";
import Table from "../../libs/react-table/Table";
import InstructorRatingChip from "./InstructorRatingChip";
import InstructorStatusChip from "./InstructorStatusChip";
import InstructorCoursesListAction from "./InstructorCoursesListAction";
import SearchTextField from "../../common/SearchTextField";
import { useState } from "react";

const InstructorCoursesTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const tableInstance = useTable({ columns, data: filteredData });

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.courseTitle.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filteredResults);
  };
  return (
    <>
      <SearchTextField
        placeholder="Search for course..."
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        className="my-2"
      />
      <Table instance={tableInstance} />;
    </>
  );
};

export default InstructorCoursesTable;

const data = [
  {
    id: 1,
    courseTitle: "The Complete Shopify Dropship Course",
    price: "451.32",
    duration: "6 months",
    students: 745,
    rating: 4.5,
    status: true,
  },
  {
    id: 2,
    courseTitle: "The Complete React Development Course",
    price: "451.32",
    duration: "6 months",
    students: 745,
    rating: 1,
    status: false,
  },
  {
    id: 3,
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
    cell: ({ row }) => <InstructorCoursesListAction data={row.original} />,
    id: "actions",
    maxSize: 40,
  },
];
