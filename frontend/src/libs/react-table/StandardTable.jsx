import clsx from "clsx";
import { flexRender } from "@tanstack/react-table";
import TablePagination from "./Pagination";

import EmptyContent from "../../common/EmptyContent";
import ErrorContent from "../../common/ErrorContent";
import LoadingIndicator from "../../common/LoadingIndicator";
import "./StandardTable.css";

function StandardTable(props) {
  return props.renderRoot(props.instance, props);
}

StandardTable.defaultProps = {
  variant: "default",
  header: true,
  footer: false,
  pagination: true,
  flexRender,
  renderRoot,
  renderTable,
  renderLoading,
  renderError,
  renderEmpty,
  renderPagination,
  renderHeader,
  renderBody,
  renderFooter,

  renderHeaderRow,
  renderHeaderCell,

  renderBodyRow,
  renderBodyCell,

  renderFooterRow,
  renderFooterCell,
};
export default StandardTable;

function renderRoot(instance, props) {
  const {
    classes,
    loading,
    error,
    empty = !instance.getPaginationRowModel().rows?.length, // if instance page is length 0
    renderTable,
    renderLoading,
    renderError,
    renderEmpty,
    pagination,
    renderPagination,
  } = props;

  const Root = props.Root || "div";

  return (
    <Root
      {...{
        ...props.RootProps,
        className: clsx(
          "Table__root",
          props.RootProps?.className,
          classes?.root
        ),
      }}
    >
      {renderTable?.(instance, props)}
      {loading
        ? renderLoading?.(instance, props)
        : error
        ? renderError?.(instance, props)
        : empty
        ? renderEmpty?.(instance, props)
        : null}
      {pagination && renderPagination?.(instance, props)}
    </Root>
  );
}

function renderTable(instance, props) {
  const {
    classes,
    header,
    footer,
    loading,
    error,
    empty = !instance.getPaginationRowModel().rows?.length,
    renderHeader,
    renderBody,
    renderFooter,
  } = props;

  const Table = props.table || "table";

  const TableProps = props.TableProps?.(instance, props);

  return (
    <Table
      {...{
        ...TableProps,
        className: clsx("Table", TableProps?.className, classes?.table),
        style: {
          width: instance.getTotalSize(),
          ...TableProps?.style,
        },
      }}
    >
      {TableProps?.children || (
        <>
          {header && renderHeader?.(instance, props)}
          {!(loading || error || empty) && (
            <>
              {renderBody?.(instance, props)}
              {footer && renderFooter?.(instance, props)}
            </>
          )}
        </>
      )}
    </Table>
  );
}

function renderHeader(instance, props) {
  const Header = props.Header || "thead";

  const HeaderProps = props.HeaderProps?.(instance, props);

  return (
    <Header
      {...{
        ...HeaderProps,
        className: clsx(
          "Table__header",
          HeaderProps?.className,
          props.classes?.header
        ),
      }}
    >
      {HeaderProps?.children ||
        instance
          .getHeaderGroups()
          .map((headerRow) =>
            props.renderHeaderRow(headerRow, instance, props)
          )}
    </Header>
  );
}

function renderHeaderRow(headerRow, instance, props) {
  const HeaderRow = props.HeaderRow || "tr";
  const HeaderRowProps = props.HeaderRow?.(headerRow, instance, props);
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";

  return (
    <HeaderRow
      {...{
        key: headerRow.id,
        ...HeaderRowProps,
        className: clsx(
          "Table__header__row",
          HeaderRowProps?.className,
          props.classes?.headerRow,
          isRelative && "Table__header__row--relative",
          isAbsolute && "Table__header__row--absolute"
        ),
      }}
    >
      {HeaderRowProps?.children ||
        headerRow.headers.map((headerCell) =>
          props.renderHeaderCell(headerCell, instance, props)
        )}
    </HeaderRow>
  );
}

function renderHeaderCell(headerCell, instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const HeaderCell = props.HeaderCell || (isDefault ? "th" : "div");
  const HeaderCellProps = props.HeaderCellProps?.(headerCell, instance, props);

  return (
    <HeaderCell
      {...{
        key: headerCell.id,
        ...HeaderCellProps,
        className: clsx(
          "Table__header__row__cell",
          HeaderCellProps?.className,
          props.classes?.headerCell,
          isRelative && "Table__header__row__cell--relative",
          isAbsolute && "Table__header__row__cell--absolute"
        ),
        style: {
          width: headerCell.getSize(),
          ...(isAbsolute ? { left: headerCell.getStart() } : {}),
          ...HeaderCellProps?.style,
        },
      }}
    >
      {HeaderCellProps?.children || (
        <>
          {headerCell.isPlaceholder
            ? null
            : props.flexRender(
                headerCell.column.columnDef.header,
                headerCell.getContext()
              )}
          <div
            {...{
              onMouseDown: headerCell.getResizeHandler(),
              onTouchStart: headerCell.getResizeHandler(),
              className: `Table__resizer ${
                headerCell.column.getIsResizing() ? "Table__resizing" : ""
              }`,
              style: {
                transform:
                  instance.options.columnResizeMode === "onEnd" &&
                  headerCell.column.getIsResizing()
                    ? `translateX(${
                        instance.getState().columnSizingInfo.deltaOffset
                      }px)`
                    : "",
              },
            }}
          />
        </>
      )}
    </HeaderCell>
  );
}

function renderBody(instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const Body = props.Body || "tbody";
  const BodyProps = props.BodyProps?.(instance, props);

  return (
    <Body
      {...{
        ...BodyProps,
        className: clsx(
          "Table__body",
          BodyProps?.className,
          props.classes?.body
        ),
      }}
    >
      {BodyProps?.children ||
        instance
          .getPaginationRowModel()
          .rows.map((bodyRow) => props.renderBodyRow(bodyRow, instance, props))}
    </Body>
  );
}

function renderBodyRow(bodyRow, instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const BodyRow = props.BodyRow || "tr";
  const BodyRowProps = props.BodyRowProps?.(bodyRow, instance, props);

  return (
    <BodyRow
      {...{
        key: bodyRow.id,
        ...BodyRowProps,
        className: clsx(
          "Table__body__row w-full",
          BodyRowProps?.className,
          props.classes?.row,
          isRelative && "Table__body__row--relative",
          isAbsolute && "Table__body__row--absolute"
        ),
      }}
    >
      {BodyRowProps?.children ||
        bodyRow
          .getVisibleCells()
          .map((bodyCell) => props.renderBodyCell(bodyCell, instance, props))}
    </BodyRow>
  );
}

function renderBodyCell(bodyCell, instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const Cell = props.Cell || "td";
  const BodyCellProps = props.BodyCellProps?.(bodyCell, instance, props);

  return (
    <Cell
      {...{
        key: bodyCell.id,
        ...BodyCellProps,
        style: {
          width: bodyCell.column.getSize(),
          ...(isAbsolute ? { left: bodyCell.column.getStart() } : {}),
          ...BodyCellProps?.style,
        },
        className: clsx(
          "Table__body__row__cell",
          BodyCellProps?.className,
          props.classes?.cell,
          isRelative && "Table__body__row__cell--relative",
          isAbsolute && "Table__body__row__cell--absolute"
        ),
      }}
    >
      {BodyCellProps?.children ||
        props.flexRender(bodyCell.column.columnDef.cell, bodyCell.getContext())}
    </Cell>
  );
}

function renderFooter(instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const Footer = props.Footer || "tfoot";
  const FooterProps = props.FooterProps?.(instance, props);

  return (
    <Footer
      {...{
        ...FooterProps,
        className: clsx(
          "Table__footer",
          FooterProps?.className,
          props.classes?.footer
        ),
      }}
    >
      {FooterProps?.children ||
        instance
          .getFooterGroups()
          .map((footerRow) =>
            props.renderFooterRow(footerRow, instance, props)
          )}
    </Footer>
  );
}

function renderFooterRow(footerRow, instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const FooterRow = props.FooterRow || "tr";
  const FooterRowProps = props.FooterRowProps?.(footerRow, instance, props);

  return (
    <FooterRow
      {...{
        key: footerRow.id,
        ...FooterRowProps,
        className: clsx(
          "Table__footer__row",
          FooterRowProps?.className,
          props.classes?.footerRow,
          isRelative && "Table__footer__row--relative",
          isAbsolute && "Table__footer__row--absolute"
        ),
      }}
    >
      {FooterRowProps?.children ||
        footerRow.headers.map((footerCell) =>
          props.renderFooterCell(footerCell, instance, props)
        )}
    </FooterRow>
  );
}

function renderFooterCell(footerCell, instance, props) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const FooterCell = props.FooterCell || "th";
  const FooterCellProps = props.FooterCellProps?.(footerCell, instance, props);

  return (
    <FooterCell
      {...{
        key: footerCell.id,
        colSpan: footerCell.colSpan,
        ...FooterCellProps,
        className: clsx(
          "Table__footer__row__cell",
          FooterCellProps?.className,
          props.classes?.footerCell,
          isRelative && "Table__footer__row__cell--relative",
          isAbsolute && "Table__footer__row__cell--absolute"
        ),
        style: {
          width: footerCell.getSize(),
          ...(isAbsolute ? { left: footerCell.getStart() } : {}),
          ...FooterCellProps?.style,
        },
      }}
    >
      {FooterCellProps?.children || (
        <>
          {footerCell.isPlaceholder
            ? null
            : props.flexRender(
                footerCell.column.columnDef.footer,
                footerCell.getContext()
              )}
        </>
      )}
    </FooterCell>
  );
}

function renderPagination(instance, props) {
  const Pagination = props.Pagination || "div";
  const PaginationProps = props.PaginationProps?.(instance, props);

  return (
    <Pagination
      {...{
        ...PaginationProps,
        className: clsx(
          "Table__pagination",
          PaginationProps?.className,
          props.classes?.pagination
        ),
      }}
    >
      {PaginationProps?.children || <TablePagination instance={instance} />}
    </Pagination>
  );
}

function renderLoading(instance, props) {
  const Loading = props.Loading || "div";
  const LoadingProps = props.LoadingProps?.(instance, props);

  return (
    <Loading
      {...{
        ...LoadingProps,
        className: clsx(
          "Table__loading",
          LoadingProps?.className,
          props.classes?.loading
        ),
      }}
    >
      {LoadingProps?.children || <LoadingIndicator />}
    </Loading>
  );
}

function renderError(instance, props) {
  const Error = props.Error || "div";
  const ErrorProps = props.ErrorProps?.(instance, props);

  return (
    <Error
      {...{
        ...ErrorProps,
        className: clsx(
          "Table__error",
          ErrorProps?.className,
          props.classes?.error
        ),
      }}
    >
      {ErrorProps?.children || <ErrorContent onTryAgain={props.onReload} />}
    </Error>
  );
}

function renderEmpty(instance, props) {
  const Empty = props.Empty || "div";
  const EmptyProps = props.EmptyProps?.(instance, props);

  return (
    <Empty
      {...{
        ...EmptyProps,
        className: clsx(
          "StandardTable__empty",
          EmptyProps?.className,
          props.classes?.empty
        ),
      }}
    >
      {EmptyProps?.children || <EmptyContent />}
    </Empty>
  );
}
