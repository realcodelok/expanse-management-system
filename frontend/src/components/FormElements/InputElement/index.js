import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function InputElement(props) {
  const classes = useStyles();
  const {
    label,
    name,
    error,
    value,
    onChange,
    type,
    options,
    inputType,
    ...rest
  } = props;
  const prepareMenusItems = () => {
    return (
      options &&
      options.map((o, i) => (
        <MenuItem value={o._id} key={i}>
          {o.name}
        </MenuItem>
      ))
    );
  };
  return (
    <FormControl className={classes.formControl} autoComplete="false">
      <InputLabel htmlFor={label}>{label}</InputLabel>
      {type === "input" && (
        <Input
          name={name}
          aria-describedby={label}
          value={value}
          onChange={onChange}
          type={inputType ? inputType : "text"}
          autoComplete="false"
          {...rest}
        />
      )}
      {type === "textarea" && (
        <TextareaAutosize
          name={name}
          aria-describedby={label}
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}
      {type === "select" && (
        <Select
          labelId="label"
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        >
          <MenuItem value=" ">Select User</MenuItem>
          <MenuItem value="mukesh">Mukesh Kumar</MenuItem>
          {prepareMenusItems()}
        </Select>
      )}

      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
