import React from "react";
import { default as Component } from "@material-ui/core/Card";

const Card = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export default Card;
