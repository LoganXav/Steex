import { PaginationParamsDefault } from "../constants/Global";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { urlSearchParamsExtractor } from "../utils/URLUtils";

function usePaginationParams() {
  // SEARCH PARAMS STATE AND THE STATE SETTER FUNCTION FROM REACT ROUTER DOM
  const [searchParams, setSearchParams] = useSearchParams();

  // MEMOIZES OUR STATE VARIABLE AND SETS THE VALUE TO THE CURRENT SEARCH PAPRAMS VALUES IN OUR URL ACCESSED USUNG THE HELPER FUNCTION BELOW
  const state = useMemo(() => getParams(searchParams), [searchParams]);

  // SETSTATE IS A CALLBACK FUNCTION THAT IS:
  /**
   * 1. cached so it only runs when the setSearchParams function is called function is called
   * 2. if the argument passed into it is a function, it is called with the current pagination state to determine the new values and update it accordingly.
   * 3. sets the offset and limit parameters to the URL search parameters using URLSearchParams
   */
  const setState = useCallback(
    (args) => {
      setSearchParams((searchParams) => {
        const {
          offset = PaginationParamsDefault.offset,
          limit = PaginationParamsDefault.limit,
        } =
          (typeof args === "function" ? args(getParams(searchParams)) : args) ||
          {};
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("offset", offset);
        newSearchParams.set("limit", limit);
        return newSearchParams;
      });
    },
    [setSearchParams]
  );

  // The hook returns a tuple containing the current state and the update function.
  return /** @type {[typeof state, typeof setState]} */ ([state, setState]);
}

export default usePaginationParams;

// getParams is a helper function that extracts and parses pagination parameters from the URL using urlSearchParamsExtractor.
// It returns an object with offset and limit as integers.

function getParams(searchParams) {
  const { offset, limit } = urlSearchParamsExtractor(
    searchParams,
    PaginationParamsDefault
  );
  return {
    offset: parseInt(offset),
    limit: parseInt(limit),
  };
}
