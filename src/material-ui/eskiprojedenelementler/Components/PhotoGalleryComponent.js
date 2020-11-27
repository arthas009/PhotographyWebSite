import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Container, Paper,Dialog,Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
  },
  root: {

  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  gridListTile:
  {
    marginBottom: theme.spacing(5), //carddan sonraki boşluk
    [theme.breakpoints.up('md')]: {
      height:'450px !important',
    },
    [theme.breakpoints.down('md')]: {
      height:'150px !important',
    },
  },
  PhotoDialog:
  {
    maxHeight: '120px',
    maxWidth: '120px'
  },

}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhotoGalleryComponent(props) {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = React.useState(null);
  const { ImageList } = props;
  const handleClickOpen = tile => { 
    setSelectedTile(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };
 
  if(ImageList !==null)
    return (
      <Container>
        <GridList cols={1}
          className={classes.gridList}>
              
          {
             ImageList.Images.map(tile => (
    
            <GridListTile className={classes.gridListTile} key={tile.id}>
              <img onClick={() => handleClickOpen(tile)} src={"http://gaziokculukresmi.com"+tile.imageName} alt={"Gazi Okçuluk"} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Ekleyen: Gazi Okculuk</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        <Grid>
        <Dialog
          fullScreen
          open={selectedTile !== null}
          onClose={handleClose}
          TransitionComponent={Transition}
        >

          {selectedTile && (
            <Paper onClick={handleClose} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${"http://gaziokculukresmi.com"+selectedTile.imageName}` }}>
              {/* Increase the priority of the hero background image */}
            </Paper >

          )}

        </Dialog>
        </Grid>
        </Container>
    );
  else
  {
    return <div></div>
  }
}

PhotoGalleryComponent.propTypes = {
  ImageList: PropTypes.object,
};