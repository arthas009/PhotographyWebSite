import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
//import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Popover, ThemeProvider } from '@material-ui/core';
import { Grid, ButtonGroup, Box, Fab, AppBar, Paper } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HideOnScroll from '../Components/HideOnScroll';
import { Link } from 'react-router-dom';


/* https://material-ui.com/components/floating-action-button/ */

const WhiteTextButton = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Button);
const useStyles = makeStyles((theme) => ({
  toolbar: { //üst çizgi
    minHeight: 0,
   // borderBottom: `1px solid ${theme.palette.divider}`,
   // overflowX: 'auto',
    //height: 'auto',
   borderBottom: `1px solid gray`,
    // color: '#0d47a1',
    color: "#FFFFFF",
    backgroundColor: '#1a237e',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      align: 'left',
     height: '2vh',
      width: '55vh',
    },
    //laptoplar için
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
      height: '2vh',
    },
    //büyük ekranlar için
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
     // height: '3vh',
  },

  },
  toolbarTitle: {
    marginLeft: theme.spacing(1),
    // color:'#0d47a1', // sol üstteki tel mail rengi
    color: "#FFFFFF",
    //flex: 1,

    // backgroundColor:'#1a237e',


  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    overflowX: 'auto',
    //color: '#0d47a1', //toolbar dakı menu yazı rengi
    color: '#1a237e',
    backgroundColor: '#1a237e',
    
  },
 
  menuButton:
  {
    border: '1px solid gray',
    color: '#212121',
    // backgroundColor:'#1a237e',
  },
  appBar:
  {
  },
  flexGrid: {
  },
  typography: {
    padding: theme.spacing(2),
  },
  logo: {
    maxWidth: 150,
    maxHeight: 90,
  },
  popover: {
    pointerEvents: 'none',
  },
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(1),
    // marginRight:theme.spacing(50)
  },

  /*ButtonGroup: {
    marginLeft:theme.spacing(50),
    marginLeft: theme.spacing(3),
  },*/


}));

const theme = createMuiTheme({
  button: {

    oversized: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 15,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    },
  },
});

export default function Header(props) {
  const classes = useStyles();
  const { sections,Iletisim } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const CustomLink = props => <Link to={"/" + props.name} {...props}></Link>;

  const handlePopover1Open = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopover1Close = () => {
    setAnchorEl(null);
  };

  const handlePopover2Open = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handlePopover2Close = () => {
    setAnchorEl2(null);
  };

  const handlePopover3Open = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handlePopover3Close = () => {
    setAnchorEl3(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover2' : undefined;

  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? 'simple-popover3' : undefined;
  if(Iletisim === null)
  return (<React.Fragment></React.Fragment>);
  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <HideOnScroll threshold={0} className={classes.appBar}>
        <AppBar>
        
          <Toolbar className={classes.toolbar} >
            <Grid 
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              noWrap
            >
              <Grid>
                <Box display={{ xs: 'none', md: 'inline' }}>
                  <PhoneIcon fontSize="small" />

                  <Link

                    color="inherit"
                    className={classes.toolbarTitle}
                  >
                    {Iletisim[0].telefon1}
               </Link>
                </Box>
                <Box display={{ xs: 'none', md: 'inline' }}>

                  <EmailIcon className={classes.emailIcon} fontSize="small" />
                  <Link

                    color="inherit"
                    className={classes.toolbarTitle}
                  >
                    {Iletisim[0].mail}
               </Link>
                </Box>
              </Grid>

              <Grid>
                <WhiteTextButton href={Iletisim[0].instagram}><InstagramIcon fontSize="small" /> </WhiteTextButton>
                <WhiteTextButton href={Iletisim[0].facebook}><FacebookIcon fontSize="small" /></WhiteTextButton>
                <WhiteTextButton href={Iletisim[0].youtube}><YouTubeIcon fontSize="small" /></WhiteTextButton>

              </Grid>

            </Grid>

          </Toolbar>

          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <ThemeProvider theme={theme}>
              {sections.map((section) => (
                /* Galeriyse farklı bir buton, değilse farklı bir buton yapısı oluşacak */
                <div>
                  {section.title === "Galeri" ? <div>
                    <Fab
                      size="medium"
                      color="inherit"
                      key={section.title}
                      variant="oversized"
                      className={classes.menuButton}
                      onClick={handlePopover1Open}
                      aria-owns={open ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      noWrap
                    >
                      {section.title}
                      <ArrowDropDownIcon />
                    </Fab>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      key={section.title+"popover"}
                      onClose={handlePopover1Close}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      {/* onClick eventleri aynı anda 2 iş yapacağı için özel isimlerle butonlara özel oluşturulması gerekti */}
                      <ButtonGroup orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text">
                        {section.subtitles.map((subsection) => (
                          <Button
                            size="medium"
                            component={CustomLink}
                            color="inherit"
                            name={"Galeri/" + subsection.url}
                            key={"Klubumuz"}
                            variant="oversized"
                            className={classes.menuButton}
                            onClick={handlePopover1Close}
                          >
                            {subsection.title}
                          </Button>

                        ))}
                      </ButtonGroup>
                    </Popover>
                  </div>
                    :
                    section.title === "Hakkında" ? <div>
                      <Fab
                        size="medium"

                        color="inherit"
                        key={section.title}
                        variant="oversized"
                        className={classes.menuButton}
                        onClick={handlePopover2Open}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                      >
                        {section.title}
                        <ArrowDropDownIcon />
                      </Fab>
                      <Popover
                        id={id2}
                        open={open2}
                        anchorEl={anchorEl2}
                        onClose={handlePopover2Close}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        {/* onClick eventleri aynı anda 2 iş yapacağı için özel isimlerle butonlara özel oluşturulması gerekti */}
                        <ButtonGroup orientation="vertical"
                          color="primary"
                          aria-label="vertical contained primary button group"
                          variant="text">
                          {section.subtitles.map((subsection) => (
                            <Button
                              component={CustomLink}
                              color="inherit"
                              name={"Hakkinda/" + subsection.url}
                              key={"Hakkinda"}
                              variant="oversized"
                              className={classes.menuButton}
                              onClick={handlePopover2Close}
                            >
                              {subsection.title}
                            </Button>

                          ))}
                        </ButtonGroup>
                      </Popover>
                    </div>
                      :
                      section.title === "Mağaza" ? <div>
                      <Fab
                        size="medium"

                        color="inherit"
                        key={section.title}
                        variant="oversized"
                        className={classes.menuButton}
                        onClick={handlePopover3Open}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                      >
                        {section.title}
                        <ArrowDropDownIcon />
                      </Fab>
                      <Popover
                        id={id3}
                        open={open3}
                        anchorEl={anchorEl3}
                        onClose={handlePopover3Close}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        {/* onClick eventleri aynı anda 2 iş yapacağı için özel isimlerle butonlara özel oluşturulması gerekti */}
                        <ButtonGroup orientation="vertical"
                          color="primary"
                          aria-label="vertical contained primary button group"
                          variant="text">
                          {section.subtitles.map((subsection) => (
                            <Button
                              component={CustomLink}
                              color="inherit"
                              name={"Magaza/" + subsection.url}
                              key={"Hakkinda"}
                              variant="oversized"
                              className={classes.menuButton}
                              onClick={handlePopover3Close}
                            >
                              {subsection.title}
                            </Button>

                          ))}
                        </ButtonGroup>
                      </Popover>
                      </div>
                      :
                      <Fab
                        size="medium"

                        component={CustomLink}
                        name={section.url}
                        color="inherit"
                        key={section.title}
                        variant="oversized"
                        className={classes.menuButton}

                      >
                        {section.title}
                      </Fab>

                  }

                </div>
              ))}
            </ThemeProvider>
          </Toolbar>
         
          
        </AppBar>

      </HideOnScroll>

    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
