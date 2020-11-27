import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
  containerFix: {
    backgroundColor: '#fafafa',
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  },
  cardMedia: {
    width: 20,
  },
});



function PricingSection(props) {
  const { malzemelerObject,haberYolu} = props;
 

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#fafafa" }}>  
      <div className={classNames("container-fluid")}>
        <Grid container spacing={2} >
          {
             malzemelerObject.map((item) =>
             <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
          >
            <PriceCard           
              title={item.malzeme_adi}    
              image= {item.malzeme_foto_yolu}
              pricing={
                <span>
                  {item.malzeme_fiyati}
                  <Typography display="inline"> ₺</Typography>
                </span>
              }
              features={item.malzeme_ozellik}
              haberYolu={haberYolu+item.malzeme_foto_yolu+".jpg"}
            />
          </Grid>
           )
          }
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
