import TextField from "../libs/mui/TextField";
import InputAdornment from "../libs/mui/InputAdornment";
import { forwardRef } from "react";
import { Iconly } from "react-iconly";

const SearchTextField = forwardRef(
  /**
   *
   * @param {import("@mui/material").TextFieldProps} props
   * @param {any} ref
   */
  function SearchTextField(props, ref) {
    const { InputProps, label, ...rest } = props;

    return (
      <TextField
        ref={ref}
        placeholder={label ? label : "Search"}
        InputProps={{
          ...InputProps,
          ...(!InputProps?.startAdornment && {
            startAdornment: (
              <InputAdornment position="start">
                <Iconly size="small" name="Search" />
              </InputAdornment>
            ),
          }),
          style: {
            color: "var(--color-mui-text-default)",
            borderColor: "var(--color-mui-primary-contrastText)",
            outline: "none",
          },
        }}
        {...rest}
      />
    );
  }
);

SearchTextField.defaultProps = {};

export default SearchTextField;
