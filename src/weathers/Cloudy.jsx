import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundImage:
      'url("https://res.cloudinary.com/dwbg1zcql/image/upload/v1656058389/CVWO%20Deployment%20Guide/dramatic-sunset-and-sunrise-sky-with-pink-clouds-2021-08-28-20-45-46-utc-min_jk63yr.jpg")',
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  textContainer: {
    display: "flex",
    marginLeft: "5vw",
    marginBottom: "10vh",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      marginLeft: "1rem",
      marginBottom: "1rem",
    },
  },
  innerTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      alignItems: "flex-start",
    },
  },
  degree: {
    fontSize: "12rem",
    fontWeight: "medium",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "7rem",
    },
  },
  country: {
    fontSize: "5.3rem",
    fontWeight: "medium",
    marginBottom: -5,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "4rem",
    },
  },
  time: {
    fontSize: "1.3rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
    },
  },
}));

const Cloudy = ({ country }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <div className={classes.textContainer}>
          <div className={classes.degree}>16&deg;</div>
          <div className={classes.innerTextContainer}>
            <div className={classes.country}>{country}</div>
            <div className={classes.time}>06:09 - Friday, 24 June 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloudy;
