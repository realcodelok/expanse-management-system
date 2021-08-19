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

export default function CustomForm(props) {
  const { pageTitle, submitButtonText } = props;
  const [users, setUsers] = React.useState([]);
  const [formData, setFormData] = React.useState({
    user: " ",
    amount: "",
    description: "",
    comment: "",
  });

  const [errors, setErrors] = React.useState({
    userError: "",
    amountError: "",
    descriptionError: "",
    commentError: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const err = name + "Error";
    const data = value.trim();
    if (name === "amount") {
      if (!isNaN(data)) {
        setFormData({ ...formData, [name]: data });
        setErrors({ ...errors, [err]: "" });
      } else
        setErrors({ ...errors, [err]: validationErrors.onlyNumbersAllowed });
    } else {
      setFormData({ ...formData, [name]: value });
      if (data === "") {
        switch (name) {
          case "user":
            setErrors({ ...errors, [err]: validationErrors.selectUser });
            break;
          case "description":
            setErrors({ ...errors, [err]: validationErrors.enterDescription });
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
          name="user"
          label="Select user"
          options={users}
          value={formData.user}
          onChange={handleInputChange}
          error={errors.userError}
          type="select"
        />
        <div className="h20"></div>
        <InputElement
          name="amount"
          label="Enter Amount"
          value={formData.amount}
          onChange={handleInputChange}
          error={errors.amountError}
          type="input"
        />
        <div className="h20"></div>
        <InputElement
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          error={errors.descriptionError}
          type="textarea"
        />
        <div className="h20"></div>
        <InputElement
          name="comment"
          label="Comment"
          value={formData.comment}
          onChange={handleInputChange}
          error={errors.commentError}
          type="textarea"
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
