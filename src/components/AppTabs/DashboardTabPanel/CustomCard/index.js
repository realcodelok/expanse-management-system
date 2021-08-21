import { Avatar, Box, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function CustomCard(props) {
  const classes = useStyles();
    const { price, title, percentage } = props;
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.left}>
          <Avatar src="/assets/images/rounded_graph_view.svg" alt="graph" />
          <Typography variant="body1">
            Rs.
            <br /> {price}
          </Typography>
        </Box>
        <Box className={classes.right}>
          <Typography variant="h6">{title}</Typography>
          <Box display="flex" alignItems="flex-end" width="100%">
            <Typography variant="body1">{percentage }%</Typography>
            <Avatar src="/assets/images/green_graph.svg" alt="green graph" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
