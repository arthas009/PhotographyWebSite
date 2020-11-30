import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 170,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://arborinfinity.com/wp-content/uploads/2020/08/maxresdefault-2020-08-29T230033.081.jpg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                ÜST SEVİYE FOTOĞRAFÇILIK
              </Typography>
              <Typography variant="h5">
                {'EBA Fotoğrafçılık, çektiği her bir pozun değerinin farkındadır ve'}
                {'işini maximum verimlilikle yapmayı amaçlar. Kullanıcıların memnuniyeti birincil hedefimizdir.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://arborinfinity.com/wp-content/uploads/2020/08/maxresdefault-2020-08-29T230033.081.jpg"
                alt="photography"
              />
              <Typography variant="h6" className={classes.title}>
                Yeni Deneyimler
              </Typography>
              <Typography variant="h5">
                {'EBA Fotoğrafçılık, sadece sizin tercihlerinizle sınırlı kalmaz, ayrıca yeni fikirler önererek '}
                {'size yeni deneyimler edinme fırsatını sunar. Yeni Tarzda eğlenceli fotoğraflar ile galerinizi süslendirebilirsiniz.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://arborinfinity.com/wp-content/uploads/2020/08/maxresdefault-2020-08-29T230033.081.jpg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
