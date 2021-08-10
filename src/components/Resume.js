import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Azərbaycan Dövlət Neft və Sənaye Universiteti
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          2012-2016 (Bakalavr)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           2012-ci ilde TQDK-nin kecirtdiyi imtahanda 572 bal yigaraq ADNS universitetinin QNM fakultesine daxil olmusam. Universitet illerinde derslerimle yanasi idmanla, müxtəlif sosyal yığıncaqlarla və şirkətlərin internship programları ilə məşğul olmuşam. Və nəhayət 2016-ci ildə universiteti bitirib hərbi xidmətə yollandim
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Hərbi qulluq
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Azərbaycan Hərbi Dəniz Qüvvələri
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           2016-2017-ci illərdə HDQ də mühərrikci matros olaraq vətənə olan borcumu yerinə yetirmişəm
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            International English Language Test
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            comp15.11.2018
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            2018 May ayinda Ingilis dili hazrlıqlarına baslayıb hemin ilin Noyabr ayinda IELTS 6 (B2) sertifikatımi aldim
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            SOCAR
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          07.01.2019-15.02.2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            2019-cu ilin Dekabr ayında coxsaylı cəhdlərimin ardından SOCAR-a işçi kimi qəbul ola bildim. Əvvəlca quyuların yeraltı və əsaslı təmiri üzrə operatr kimi işə başlasamda həmin ilin yay aylarında idarə tərəfindən vəzifəcə bir pillə yuxarı qaldırılaraq Qazmaçı köməkçisi vəzifəsinə yüksəldildim. 2020-ci ilin Fevral ayında proqramlaşdırmaya olan marağımdan işimdən ayrıldım.
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Tech Academy
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          09.11.2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Bir qədər individual məşğul olduqdan sonra 2020-ci ilin Dekabr ayında Tech academy-də web developmenti daha dərindən və peşəkar şəkildə öyrənməyə başladim. Kurs real proyektlərlə taniş oldumağıma və biraz da bu saheye olan marağımı artirmağa kömək oldu.
          </Typography>
        </Box>








        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Webhouse
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          03.06.2021-now
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
2021-ci ilin May ayından Webhouse adlı şirkətdə  Web Developer kimi fəaliyyət göstərirəm. Əsas öhtəliklərim React və Vanilla Javascript ilə Web səhifənin front hissəsi olsada öz Backend biliklərimlə də komandaya dəstək olmuşam. 
          </Typography>
        </Box>















      </Box>
    </Box>
  );
};

export default Resume;
