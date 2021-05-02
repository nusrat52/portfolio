import React from "react";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/bir.png";
import project2 from "../images/velosiped.png";
import project3 from "../images/gridolan.png";
import project4 from "../images/cutluk.png";
import project5 from "../images/adaminportu.png";
import project6 from "../images/todo.png";
import project7 from "../images/export.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
   minHeight:"100vh",
  },
  cardContainer: {
    maxWidth: 400,
    margin: "3rem auto",
    height: "400px"
  },
}));

const projects = [
  {
    name: "React link Shortener web page",
    description: `react single page application wich shortens link with api `,
    image: project1,
    linkto: "https://nusrat52.github.io/assets/reactLinkshortenerr/index.html",
    github:"https://github.com/nusrat52/reactLinkshorter"
  },
  {
    name: "Project 2",
    description: `singe page application little Javascript scss with compiler Koala , Html`,
    image: project2,
    linkto: "https://nusrat52.github.io/scssOnlyDE/index.html",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/scssOnlyDE"
  },
  {
    name: "Project 3",
    description: `Single page app, responsive with css's grid system . Javascript css html`,
    image: project3,
    linkto: "https://nusrat52.github.io/gridSistem/index.html",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/gridSistem"
  },
  {
    name: "Project 4",
    description: `Singe page application gulp.js scss responsive too litle javascript and html`,
    image: project4,
    linkto: "https://nusrat52.github.io/gulpScss/index.html",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/gulpScss"
  },
  {
    name: "Project 1",
    description: `singe page application vanilla Javascript css html slick slider lots of icons ;)`,
    image: project1,
    linkto: "https://nusrat52.github.io/slicknr/index.html",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/slicknr"
  },
  {
    name: "Project 5",
    description: `Singe page app gulp.js scss html and vanilla javascript . Portfoilo of Adam smith`,
    image: project5,
    linkto: "https://nusrat52.github.io/gulpScssPort/index.html  ",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/gulpScssPort"
  },
  {
    name: "Simple todo ",
    description: `Simple todo list with local storage.Vanilla javacript Css Html`,
    image: project6,
    linkto: "https://nusrat52.github.io/todoLocalstorage/localst.html",
    github:"https://github.com/nusrat52/nusrat52.github.io/tree/main/todoLocalstorage"
  },
  {
    name: "Ex portfoilo ",
    description: `My ex Portfolio unique design, html, css lots of pure Javascript. All code reserved in index.html, style.css and  app.js `,
    image: project7,
    linkto: "https://nusrat52.github.io",
    github:"https://github.com/nusrat52/nusrat52.github.io"
  },
  
  
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="start">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project.image}
                  />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.github} size="small" color="primary">
                  Code
                </Button>
                
                <Button href={project.linkto} size="small" color="primary">
                Live demo
                </Button>
              
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
