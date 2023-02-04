import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
const useStyles = makeStyles ((theme)=>({

    banner: {
        backgroundColor: "#fafafa",
      },
      bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
    }));

const Banner = () => {
    const classes = useStyles()
    return(
     <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography 
                variant="h4"
                style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                }}
                >
                    Crypto Market
                </Typography>
                <Typography 
                variant="subtitle2"
                style={{
                    color: "black",
                    textTransform: "capitalize"
                }}
                >
                    The global crypto market cap is $1.08T
                </Typography>
            </div>
            <Carousel/>
        </Container>
     </div>   
    )
}

export default Banner