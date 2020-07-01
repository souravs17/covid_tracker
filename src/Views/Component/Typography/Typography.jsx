import React from "react";
import { default as Component } from "@material-ui/core/Typography";

const Typography = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

export default Typography;
