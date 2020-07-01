import React from "react";
import { Grid } from "@material-ui/core";
// import styles from "./GridContainer";

const GridContainer = ({ children }) => {
  return (
    <Grid style={{ margin: "10px" }} container spacing={3} justify="center">
      {children}
    </Grid>
  );
};

export default GridContainer;
