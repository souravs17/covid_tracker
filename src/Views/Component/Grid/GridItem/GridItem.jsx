import React from "react";
import { Grid } from "@material-ui/core";

const GridItem = ({ children, ...rest }) => {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem;
