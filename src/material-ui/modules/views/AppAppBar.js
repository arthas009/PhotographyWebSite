import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import { Popover, ButtonGroup, Button,Fab } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover1Open = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopover1Close = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Button
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/premium-themes/onepirate/"
          >
            {'FOTOĞRAFÇILIK'}
          </Button>
          <div className={classes.right}>
            <Button
             size="small"
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href=""
              onClick={handlePopover1Open}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
            >
              {'Galeri'}
            </Button>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              key={"popover"}
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
                <Button onClick={handlePopover1Close}>
                  Sub Button
                          </Button>

              </ButtonGroup>
            </Popover>
            <Button
              size="small"
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {'HAKKINDA'}
            </Button>

            <Button
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {'BIZE ULAŞIN'}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
