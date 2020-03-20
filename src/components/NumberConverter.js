import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RomanNumeral from "../services/RomanNumeral";
import { SyncAlt } from '@material-ui/icons';

class NumbersConverter extends React.Component {
  constructor() {
    super();
    this.state ={
      arabicInteger: '',
      romanNumber: '',
    };
    this.convertToRoman = this.convertToRoman.bind(this);
    this.convertFromRoman = this.convertFromRoman.bind(this);
  }

  convertToRoman(event) {
    const romanNumber = RomanNumeral.toRoman(event.target.value);
    this.setState({
      romanNumber: romanNumber,
      arabicInteger: event.target.value,
    });
  }

  convertFromRoman(event) {
    const arabicNumber = RomanNumeral.fromRoman(event.target.value);
    this.setState({
      arabicInteger: arabicNumber,
      romanNumber: event.target.value,
    });
  }

  render() {
    return (
        <div>
          <text> Roman Number Converter</text>
          <Grid container spacing={3} style={{ marginTop: "10px" }}>
            <Grid item xs={5}>
              <TextField id="arabic-number" label="Arabic Number" variant="outlined" value={this.state.arabicInteger} onChange={this.convertToRoman}/>
            </Grid>
            <Grid item xs={2} style={{marginTop: "10px"}}>
              <SyncAlt/>
            </Grid>
            <Grid item xs={5}>
              <TextField id="roman-number" label="Roman Number" variant="outlined" value={this.state.romanNumber} onChange={this.convertFromRoman}/>
            </Grid>
          </Grid>
        </div>
    );
  }


}

export default NumbersConverter;
