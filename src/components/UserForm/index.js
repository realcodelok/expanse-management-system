import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { validationErrors } from "../../utils/constant";
import InputElement from "../FormElements/InputElement";
import useStyles from "./style";

export default function UserForm(props) {
  const { pageTitle, submitButtonText } = props;
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = React.useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneNumberError: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const err = name + "Error";
    const data = value.trim();
    console.log("=====> input is changed....", value, name);
    if (name === "phoneNumber") {
      if (!isNaN(data)) {
        setFormData({ ...formData, [name]: data });
        setErrors({ ...errors, [err]: "" });
      } else
        setErrors({ ...errors, [err]: validationErrors.onlyNumbersAllowed });
    } else {
      setFormData({ ...formData, [name]: value });
      if (data === "") {
        switch (name) {
          case "name":
            setErrors({ ...errors, [err]: validationErrors.nameError });
            break;
          case "email":
            setErrors({ ...errors, [err]: validationErrors.emailError });
            break;
          case "password":
            setErrors({ ...errors, [err]: validationErrors.passwordError });
            break;
          case "confirmPassword":
            setErrors({
              ...errors,
              [err]: validationErrors.confirmPasswordError,
            });
            break;
          default:
            break;
        }
      } else {
        setErrors({ ...errors, [err]: "" });
      }
    }
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">{pageTitle}</Typography>

        <InputElement
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.nameError}
          type="input"
        />
        <div className="h20"></div>
        <InputElement
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.emailError}
          type="input"
          inputType="text"
        />
        <div className="h20"></div>
        <InputElement
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.passwordError}
          type="input"
          inputType="password"
        />
        <div className="h20"></div>
        <InputElement
          name="confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPasswordError}
          type="input"
        />
        <div className="h20"></div>
        <InputElement
          name="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumberError}
          type="input"
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" color="primary">
          {submitButtonText}
        </Button>
      </CardActions>
    </Card>
  );
}
