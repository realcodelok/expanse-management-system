import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { messages } from "../../utils/constant";
import InputElement from "../FormElements/InputElement";
import useStyles from "./style";
import { newUserSchema } from "../../Validations/UserRegistrationFormValidation";

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

  const clearAllErrors = () => {
    const clearedErrObj = Object.keys(errors).map((e) => (errors[e] = ""));
    setErrors(clearedErrObj);
  };

  const handleInputChange = async (e) => {
    const { value, name } = e.target;
    if (!(name === "phoneNumber" && isNaN(value))) {
      setFormData({ ...formData, [name]: value });
    }
    try {
      const obj = {
        [name]: value,
      };
      if (name === "confirmPassword") {
        obj.password = formData.password;
      }
      await newUserSchema.validateAt(name, obj);
      clearAllErrors();
    } catch (e) {
      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const targets = event.target;
    const obj = {
      name: targets[0].value,
      email: targets[1].value,
      password: targets[2].value,
      confirmPassword: targets[3].value,
      phoneNumber: targets[4].value,
    };
    try {
      await newUserSchema.validate(obj, {
        abortEarly: false,
      });
      //TODO: insert the data ==> formData
    } catch (e) {
      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleFormSubmit}>
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
            tooltipTitle={messages.passwordValidationInfo}
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
          <Button variant="contained" color="primary" type="submit">
            {submitButtonText}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
