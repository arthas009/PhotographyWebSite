import React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Container from '@material-ui/core/Container';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(true);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        {row.kurs_adi}
        </TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Kurs Adı</TableCell>
                    <TableCell>Kurs Saatleri</TableCell>
                    <TableCell>Kurs Günleri</TableCell>
                    <TableCell>Eğitmen</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                    <TableRow key={row.kurs_adi}>
                      <TableCell component="th" scope="row">
                        {row.kurs_adi}
                      </TableCell>
                      <TableCell>{row.kurs_baslangic_saati} - {row.kurs_bitis_saati}</TableCell>
                      <TableCell>{row.kurs_gunleri}</TableCell>              
                      <TableCell>{row.egitmen_adi}</TableCell>              

                    </TableRow>
               
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    KursAdı: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable(props) {

  const { objectKurslar } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {objectKurslar.map((row) => (
            <Row key={objectKurslar.kurs_adi} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}