import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles, Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width:280,
    height:400,
   
    align:'center',
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      width: 256,
    height:400,
    },
    
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      width:320,
      height:500,
  
  },
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
    
    
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.primary.main
  },
  cardMedia: {
    align:'left',
    borderLeft: theme.spacing(0),
   
    [theme.breakpoints.down('sm')]: {
      width:150,
    height:150,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),

    align:'center',
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      width: 200,
    height:200,
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      width:250,
      height:250,
  
  },
  },
});

function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted, image,haberYolu } = props;
  return (
    <Grid>
    <Box>
    <div align='center' className={highlighted ? classes.cardHightlighted : classes.card}>

      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <img className={classes.cardMedia} align="left" src={haberYolu}>    
       
       </img>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {pricing}
        </Typography>
      </Box>
         
         {features.split(',').map((item) => 
         <Box display="flex" alignItems="left" mb={1}>
         <CheckIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark
            }}
            
          />
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {item}
            </Typography>
         
            </Box> 
         )
         
         }
        
         
       
    </div> 
    </Box>
    </Grid>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  features: PropTypes.string.isRequired,
  //image: PropTypes.string.isRequired,
  //image: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
 // features: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PriceCard);
