import Typography from "../libs/mui/Typography";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { createElement } from "react";

function useTable(options) {
  return useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    columns,
    ...options,
    data: options.data || data,
    defaultColumn: {
      ...options?.defaultColumn,
    },
  });
}

export default useTable;

const data = [];

const columns = [{}];
