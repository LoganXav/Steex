import { TextField as MuiTextField, styled } from "@mui/material";
import { useState } from "react";

export const TextField = styled((props) => {
  const { InputLabelProps, InputProps, onFocus, onBlur, ...restProps } = props;
  const [shrink, setShrink] = useState(false);
  const hasStartAdornment = InputProps?.startAdornment;
  return (
    <MuiTextField
      onFocus={(e) => {
        setShrink(true);
        if (hasStartAdornment) {
          onFocus && onFocus(e);
        }
      }}
      onBlur={(e) => {
        !e.target.value && setShrink(false);
        if (hasStartAdornment) {
          onBlur && onBlur(e);
        }
      }}
      InputLabelProps={{
        ...(InputLabelProps ? { ...InputLabelProps } : {}),
        ...(hasStartAdornment ? { shrink: shrink } : {}),
      }}
      InputProps={{ ...InputProps }}
      {...restProps}
    />
  );
})(({ InputProps }) =>
  InputProps?.startAdornment
    ? {
        "& .MuiInputBase-inputAdornedStart": {
          paddingLeft: "10px !important",
        },
        "& .MuiFormLabel-root": {
          "&.MuiInputLabel-filled": {
            "&:not(.MuiInputLabel-shrink)": {
              paddingLeft: "35px !important",
            },
          },
        },
        "& .MuiInputLabel-root": {
          "&.MuiInputLabel-filled": {
            "&.MuiInputLabel-shrink": {
              paddingLeft: "43px !important",
            },
          },
        },
        "& .MuiInputAdornment-root": {
          "&:not(.MuiInputAdornment-hiddenLabel)": {
            "&.MuiInputAdornment-positionStart": { margin: "0 !important" },
          },
        },
      }
    : {}
);

export default TextField;
