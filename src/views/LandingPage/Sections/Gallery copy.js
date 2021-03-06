import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <h2 className={classes.title}>Gallery</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/1_07ghlq8zB?ik-sdk-version=javascript-1.4.3&updatedAt=1643819588268"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #73</h2>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/DAC_10_hHdbXGuxf.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658151326377"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #89</h2>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/14_c2NJaspPcQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643834233162"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #4</h2>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/DAC_9_DtTqSYA9e.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658151325823"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #22</h2>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_nn8PuGDK0?ik-sdk-version=javascript-1.4.3&updatedAt=1643834347824"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #56</h2>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={100} sm={100} md={100} className={classes.itemGrid}>
                <img
                  src={
                    "https://ik.imagekit.io/mbhxghyf1m2/DAC_6_2_6Q8ObvuG5.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658151325665"
                  }
                  alt="Disconaut Suit"
                  className={imageClasses}
                />
                <h2>Disconaut #18</h2>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
