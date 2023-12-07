import Icon from "../mui/Icon";
import Button from "../mui/Button";
import IconButton from "../mui/IconButton";
import Typography from "../mui/Typography";
import clsx from "clsx";
import "./Pagination.css";

function Pagination(props) {
  const { instance, className, classes, ...rest } = props;

  return (
    <>
      <div className={clsx("Pagination", className, classes?.root)} {...rest}>
        <div
          className={clsx(
            "Pagination__info text-mui-primary-tertiary",
            classes?.info
          )}
        >
          <Typography className="mr-2">Showing</Typography>
          {instance.getState().pagination?.pageSize *
            instance.getState().pagination?.pageIndex +
            1}{" "}
          -{" "}
          {instance.getState().pagination?.pageSize *
            (instance.getState().pagination?.pageIndex + 1)}{" "}
          of{" "}
          {instance.options.manualPagination
            ? (instance.options?.pageCount || 0) *
                instance.getState().pagination.pageSize -
              (instance.getState().pagination.pageSize -
                instance.getPrePaginationRowModel().rows.length)
            : instance.getPrePaginationRowModel().rows.length}
          <Typography className="ml-2">Results</Typography>
        </div>
        {/* <IconButton
        color="inherit"
        size="small"
        onClick={() => instance.setPageIndex(0)}
        // disabled={!instance.getCanPreviousPage()}
      >
        <Icon>first_page</Icon>
      </IconButton> */}

        <div className="flex items-center gap-2">
          <Button
            className="Pagination__button text-mui-primary-tertiary"
            // color="primary"
            size="small"
            onClick={() => instance.previousPage()}
            // disabled={!instance.getCanPreviousPage()}
          >
            Previous
          </Button>
          {/* <Button
            className="Pagination__button"
            // color="primary"
            size="small"
            onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
            // disabled={!instance.getCanNextPage()}
          >
            {String(instance.getPageCount() + 1)}
          </Button> */}

          <div className={clsx("Pagination__page", classes?.page)}>
            <Button
              // color="primary"
              className={clsx("Pagination__pageText", classes?.pageText)}
            >
              {instance.getState()?.pagination?.pageIndex + 1}
            </Button>
          </div>

          {/* <Button
            className="Pagination__button"
            // color="primary"
            size="small"
            onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
            // disabled={!instance.getCanNextPage()}
          >
            {String(instance.getPageCount() + 2)}
          </Button> */}
          <Button
            className="Pagination__button text-mui-primary-main"
            // color="primary"
            size="small"
            onClick={() => instance.nextPage()}
            // disabled={!instance.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
