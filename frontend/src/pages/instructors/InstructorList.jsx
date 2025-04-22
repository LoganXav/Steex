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

    const filteredResults = data.filter((item) => item.instructor.toLowerCase().includes(searchTerm));

    setFilteredData(filteredResults);
  };
  return (
    <>
      <Toolbar disableGutters className="flex justify-between items-center">
        <Typography variant="body1" className="font-semibold">
          MEMBERS
        </Typography>
      </Toolbar>

      <SearchTextField placeholder="Search for members..." size="small" value={searchTerm} onChange={handleSearch} className="my-4" />
      <Table instance={tableInstance} />
    </>
  );
};

export default Instructors;

const data = [
  {
    id: 1,
    fullName: "Grace Thompson",
    department: "Welfare Unit",
    yearsActive: "3 Years",
    number: "+1 (202) 555-0171",
    email: "grace@email.com",
    status: true,
  },
  {
    id: 2,
    fullName: "Michael Adenuga",
    department: "Evangelism Team",
    yearsActive: "1 Year",
    number: "+1 (202) 555-0129",
    email: "michael@email.com",
    status: false,
  },
  {
    id: 3,
    fullName: "Esther Obasi",
    department: "Prayer Unit",
    yearsActive: "2 Years",
    number: "+1 (202) 555-0154",
    email: "esther@email.com",
    status: true,
  },
  {
    id: 4,
    fullName: "Chinedu Okafor",
    department: "Choir",
    yearsActive: "1 Year",
    number: "+1 (202) 555-0112",
    email: "chinedu@email.com",
    status: true,
  },
  {
    id: 5,
    fullName: "Jonathan Brooks",
    department: "Technical Team",
    yearsActive: "4 Years",
    number: "+1 (303) 555-0199",
    email: "jonathan.brooks@email.com",
    status: true,
  },
  {
    id: 6,
    fullName: "Sarah Miller",
    department: "Ushering Unit",
    yearsActive: "2 Years",
    number: "+1 (312) 555-0147",
    email: "sarah.miller@email.com",
    status: false,
  },
  {
    id: 7,
    fullName: "David Wilson",
    department: "Media Team",
    yearsActive: "5 Years",
    number: "+1 (415) 555-0138",
    email: "david.wilson@email.com",
    status: true,
  },
  {
    id: 8,
    fullName: "Emily Johnson",
    department: "Children Ministry",
    yearsActive: "3 Years",
    number: "+1 (646) 555-0176",
    email: "emily.johnson@email.com",
    status: true,
  },
  {
    id: 9,
    fullName: "Christopher Lee",
    department: "Security Unit",
    yearsActive: "2 Years",
    number: "+1 (718) 555-0163",
    email: "chris.lee@email.com",
    status: false,
  },
  {
    id: 10,
    fullName: "Ashley Brown",
    department: "Hospitality Team",
    yearsActive: "1 Year",
    number: "+1 (510) 555-0182",
    email: "ashley.brown@email.com",
    status: true,
  },
  {
    id: 11,
    fullName: "Brian Scott",
    department: "Welfare Unit",
    yearsActive: "6 Years",
    number: "+1 (347) 555-0104",
    email: "brian.scott@email.com",
    status: true,
  },
  {
    id: 12,
    fullName: "Laura Adams",
    department: "Prayer Unit",
    yearsActive: "2 Years",
    number: "+1 (623) 555-0155",
    email: "laura.adams@email.com",
    status: true,
  },
  {
    id: 13,
    fullName: "Mark Davis",
    department: "Evangelism Team",
    yearsActive: "3 Years",
    number: "+1 (210) 555-0190",
    email: "mark.davis@email.com",
    status: false,
  },
  {
    id: 14,
    fullName: "Olivia Garcia",
    department: "Choir",
    yearsActive: "1 Year",
    number: "+1 (972) 555-0166",
    email: "olivia.garcia@email.com",
    status: true,
  },
  {
    id: 15,
    fullName: "James Martinez",
    department: "Technical Team",
    yearsActive: "4 Years",
    number: "+1 (213) 555-0144",
    email: "james.martinez@email.com",
    status: true,
  },
  {
    id: 16,
    fullName: "Natalie Turner",
    department: "Ushering Unit",
    yearsActive: "3 Years",
    number: "+1 (310) 555-0195",
    email: "natalie.turner@email.com",
    status: true,
  },
  {
    id: 17,
    fullName: "Ethan Hill",
    department: "Media Team",
    yearsActive: "2 Years",
    number: "+1 (469) 555-0118",
    email: "ethan.hill@email.com",
    status: false,
  },
  {
    id: 18,
    fullName: "Chloe Baker",
    department: "Children Ministry",
    yearsActive: "5 Years",
    number: "+1 (602) 555-0132",
    email: "chloe.baker@email.com",
    status: true,
  },
  {
    id: 19,
    fullName: "Logan Walker",
    department: "Security Unit",
    yearsActive: "3 Years",
    number: "+1 (708) 555-0178",
    email: "logan.walker@email.com",
    status: true,
  },
  {
    id: 20,
    fullName: "Avery Clark",
    department: "Hospitality Team",
    yearsActive: "1 Year",
    number: "+1 (917) 555-0189",
    email: "avery.clark@email.com",
    status: false,
  },
];

const columns = [
  {
    header: "Full Name",
    accessorKey: "fullName",
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Years Active",
    accessorKey: "yearsActive",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone number",
    accessorKey: "number",
  },

  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => <InstructorStatusChip size="small" status={getValue()} />,
  },
  {
    header: "Action",
    accessorKey: "actions",
    cell: ({ row }) => <InstructorListAction data={row.original} />,
    id: "actions",
    maxSize: 40,
  },
];
