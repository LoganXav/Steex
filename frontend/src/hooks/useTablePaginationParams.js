import { useCallback, useMemo } from "react";
import usePaginationParams from "./usePaginationParams";

function useTablePaginationParams() {
  /**
   * This hook builds on top of usePaginationParams and adapts it for managing pagination in a table.
   * It provides additional functionality to calculate the pageSize and pageIndex based on the offset and limit.
   * It returns the table-specific state and update function along with the general pagination parameters.
   */
  const [paginationParams, setPaginationParams] = usePaginationParams();

  const state = useMemo(() => getState(paginationParams), [paginationParams]);

  const setState = useCallback(
    (args) => {
      setPaginationParams((previousParam) => {
        const { pageIndex, pageSize } =
          typeof args === "function"
            ? args(getState(previousParam))
            : args || {};
        // If the user moves to the next page:
        // Offset becomes 10 (skip the first 10 items)
        // Page Index becomes 1 (now on the second page)
        return { offset: pageIndex * pageSize, limit: pageSize };
      });
    },
    [setPaginationParams]
  );

  return /** @type {[typeof state, typeof setState, typeof paginationParams, typeof setPaginationParams]} */ ([
    state,
    setState,
    paginationParams,
    setPaginationParams,
  ]);
}

export default useTablePaginationParams;

/**
 * @param {{offset: number; limit: number}} params
 */
function getState({ limit, offset }) {
  return { pageSize: limit, pageIndex: offset / limit };
}
