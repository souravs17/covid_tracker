import React from "react";
import { default as Component } from "@material-ui/core/CardContent";

const CardContent = ({ children, ...rest }) => (
  <Component {...rest}>{children}</Component>
);

export default CardContent;
