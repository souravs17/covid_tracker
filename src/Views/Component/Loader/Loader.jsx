import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    // <div className={classes.root}>
    <CircularProgress />
    // </div>
  );
};

export default Loader;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

// export default const Loader = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CircularProgress />
//       <CircularProgress color="secondary" />
//     </div>
//   );
// }
