import { StoreQueryTagEnum } from "constants/StoreConstants";

/**
 *
 * @param {string} tagType
 * @param {any[]} resultsWithIds
 * @param {{selectId: (arg: any) => string}} options
 * @returns
 */
export function provideTags(tagType, resultsWithIds, error, options = {}) {
  const { selectId = ({ id }) => id } = options;
  const listTag = { type: tagType };
  const result = error
    ? [StoreQueryTagEnum.ERROR]
    : Array.isArray(resultsWithIds)
    ? [
        ...resultsWithIds.map((result) => ({
          type: tagType,
          id: selectId(result || {}) || "",
        })),
        tagType,
      ]
    : typeof resultsWithIds === "object"
    ? [{ type: tagType, id: selectId(resultsWithIds) }]
    : [listTag];

  return result;
}

export function invalidateTags(tagType, ids, error) {
  const result = error
    ? []
    : ids?.length
    ? [...ids.map((id) => ({ type: tagType, id }))]
    : [{ type: tagType }];

  return result;
}
