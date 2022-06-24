import React from "react";
import { createStyles, Loader } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors[theme.primaryColor][0],
  },
}));

const LoadingPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Loader />
    </div>
  );
};

export default LoadingPage;
