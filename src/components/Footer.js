import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href="https://www.facebook.com/nusret.ibrahimli/" icon={<Facebook />} className={classes.root} />
      <BottomNavigationAction href="https://github.com/nusrat52" icon={<GitHubIcon />} className={classes.root} />
      <h1>odu</h1>
      <BottomNavigationAction href="https://www.linkedin.com/in/nusret-ibrahimli-b42063148/" icon={<LinkedInIcon />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
