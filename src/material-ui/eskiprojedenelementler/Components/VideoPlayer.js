import React from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import { Grid}from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


/*const useStyles = makeStyles((theme) => ({
  videoGrid:
  {
    marginTop:theme.spacing(2),
  } 

}));*/

export default function VideoPlayer(props) {
  //const classes = useStyles();
  const { url } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  if (matches)
    return (
      <Grid>
        <ReactPlayer

          width='950px'
          height='450px'
          url={url}
          controls={true}
        />

      </Grid>
    );
  else {
    return (
      <Grid>
        <ReactPlayer
          width='15uv'
          height='15uv'
          url={url}
          controls={true}
        />

      </Grid>
    );
  }
}

VideoPlayer.propTypes = {
  post: PropTypes.object,
};
