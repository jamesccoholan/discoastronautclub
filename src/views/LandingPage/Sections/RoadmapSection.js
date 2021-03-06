import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: 1,
    img: "https://ik.imagekit.io/5ierklngtbt/img/Helmet_Icon_1_oJ6O6-rbJ?ik-sdk-version=javascript-1.4.3&updatedAt=1643768868927",
    items: [
      // {
      //   title: "The Most Sophisticated Media Operation in Web3",
      //   description:
      //     "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      // },
      {
        title: "Original Music",
        description:
          "Incredible Original Music, DAC will have original music drops.",
      },
    ],
  },
  {
    phase: 2,
    img: "https://ik.imagekit.io/5ierklngtbt/img/Helmet_Icon_2_0C6lwYZ4I?ik-sdk-version=javascript-1.4.3&updatedAt=1643768902961",
    items: [
      {
        title: "Live Shows and Events",
        description:
          "Unforgettable Live Events, VIP Access to DAC Concerts, Private Events and Destination Music Festivals. Owning a DAC NFT acts as a VIP access token to live concerts, club nights, private events, DAC club-houses, and curated destination music festivals.",
      },
      {
        title: "Luxury Fashion",
        description:
          "Access to Exclusive and Limited Edition Luxury Fashion Merchandise. Each Disconaut has a unique look that leans into various sub-genres of music culture. Own the physical merchandise of your on-chain NFT.",
      },
      {
        title: "Own The Moment",
        description:
          "Mint Collections from Disconaut Shows. Own a moment from that concert.",
      },
    ],
  },
  {
    phase: 3,
    img: "https://ik.imagekit.io/5ierklngtbt/img/Helmet_Icon_3_HvuJndXuL?ik-sdk-version=javascript-1.4.3&updatedAt=1643768808897",
    items: [
      {
        title: "Mint 2",
        description:
          "10K Animated Disconauts dancing to 10K Original pieces of music. Fully animated, interactive lighting and music.",
      },
      {
        title: "Metaverse Concerts",
        description:
          "The full festival experience, virtualized. First Access to Our Virtual Concert Platform Virtualized Music Festivals; custom light shows and visuals, live DJ Sets, and larger than life venues. Accessible through streaming services and VR. NFT Staking to Accumulate a Social and Governance Token, Giving the Holder Increasing Voting Rights in Project Activities and Access to Future Whitelists.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Who We Are</h1>
              <h4 className={classes.description}>
                {
                  "The Disco Astronaut Club home of the Disconauts is the first on-chain, virtual native artist producing top of the line music and next generation virtual concerts. We are working hard to establish the DAC with a strong community and brand!"
                }
              </h4>
            </div>
          </Fade>
          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  {/* <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  /> */}
                  <div className={classes.roadmapSection}>
                    {/* <h1 className={classes.roadmapPhase}>PHASE {r.phase}</h1> */}
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
