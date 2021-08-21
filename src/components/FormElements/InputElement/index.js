import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Tooltip,
} from "@material-ui/core";
import React from "react";
import InfoIcon from "@material-ui/icons/Info";
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
    tooltipTitle,
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
          autoComplete="off"
        />
      )}
      {type === "textarea" && (
        <TextareaAutosize
          name={name}
          aria-describedby={label}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      )}
      {type === "select" && (
        <Select
          labelId="label"
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        >
          <MenuItem value=" ">Select User</MenuItem>
          <MenuItem value="mukesh">Mukesh Kumar</MenuItem>
          {prepareMenusItems()}
        </Select>
      )}
      {tooltipTitle && (
        <Tooltip
          title={tooltipTitle}
          arrow={true}
          enterTouchDelay={100}
          className={classes.tooltipIconButton}
        >
          <InfoIcon />
        </Tooltip>
      )}
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
