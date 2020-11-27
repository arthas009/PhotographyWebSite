import React from "react";
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Grid } from "@material-ui/core";
//import Slide from "@material-ui/core/Slide";
import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles(theme => ({
    gridListTile:
    {
        [theme.breakpoints.up('md')]: {
            height: '550px !important',
        },
        [theme.breakpoints.down('md')]: {
            height: '250px !important',
        },
    },
    typography:
    {
      margin:theme.spacing(2),
    }
}));
const themeTypography = createMuiTheme({
    typography: {
      overline: {
            fontSize:25

        //textDecorationLine: 'underline'
      },
      underline: {
        fontSize:25

      },
    },
  });

/*  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});*/

export default function VideoGalleryComponent(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { VideoList } = props;
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
            <GridList cols={1}>      
                {VideoList.Videos.map(tile => (
                    <GridListTile className={classes.gridListTile} key={tile.id}>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center">
                            <Box>
                            <VideoPlayer playing={true} url={"http://gaziokculukresmi.com/"+tile.videoName} />
                            </Box>
                            { matches ? 
                            <Typography theme={themeTypography} variant='overline'> {tile.author} </Typography>:
                            <Typography theme={themeTypography} variant='underline'> {tile.author} </Typography>

}
                            
                        </Grid>
<hr></hr>
                    </GridListTile>
                ))}
            </GridList>

    );

}

VideoGalleryComponent.propTypes = {
    ImageList: PropTypes.object,
};