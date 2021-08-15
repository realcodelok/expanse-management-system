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
  const { label, name, error, value, onChange, type, options } = props;
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
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      {type === "input" && (
        <Input
          name={name}
          aria-describedby={label}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "textarea" && (
        <TextareaAutosize
          name={name}
          aria-describedby={label}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "select" && (
        <Select labelId="label" name={name} value={value} onChange={onChange}>
          <MenuItem value=" ">Select User</MenuItem>
          <MenuItem value="mukesh">Mukesh Kumar</MenuItem>
          {prepareMenusItems()}
        </Select>
      )}

      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
