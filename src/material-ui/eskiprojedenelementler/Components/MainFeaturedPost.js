import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';


const WhiteTextButton = withStyles({
  root: {
    color: "#FFFFFF",
    borderColor: "#ffffff"
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      height: '55vh',

    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      height: '30vh',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      height: '20vh',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      height: '15vh',
    },
  },

  mainFeaturedPostNonMainPage:
  {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      height: '35vh',

    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      height: '10vh',
    },
  },
  overlay: {

    backgroundColor: 'rgba(0,0,0,.3)',

  },
  primaryTyphography:
  {
  
    [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
     fontSize: 15,
     paddingTop: theme.spacing(1),
     paddingLeft: theme.spacing(1),
     paddingRight: theme.spacing(1)
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
  },
  },
 
  mainFeaturedPostContent: {
    justifyContent: 'center',
  },
  button:{
    padding: theme.spacing(1),
    marginBottom:theme.spacing(1),

    [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
     fontSize: 15,    
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,    
  },
  },

}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post, isMainPage } = props;
  const CustomLink = props => <Link href={"/" + props.name} {...props}></Link>;
  console.log(post.image);
  if (isMainPage === true) {
    return (
     z
    );
  }
  else {
    return (
      <Paper className={classes.mainFeaturedPostNonMainPage} style={{ backgroundImage: `url(${post.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none', width: '80%' }} src={post.image} alt={post.imageText} />}
        <Grid container className={classes.mainFeaturedPostContent}>
          <div className={classes.overlay}>
            <Typography className={classes.primaryTyphography} align="center" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography className={classes.primaryTyphography} align="center" color="inherit" paragraph>
              {post.description}
            </Typography>
            {
              post.btnName === '' ? null :
                <Typography align="center">
                  <Button
                    component={CustomLink}
                    color="inherit"
                    name={post.btnUrl}
                    key={"Klubumuz"}
                    variant="outlined"
                    className={classes.button}

                  >
                    {post.btnName}
                  </Button>
                </Typography>
            }
          </div>
        </Grid>
      </Paper>
    );
  }
};


MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
