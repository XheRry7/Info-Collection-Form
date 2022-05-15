import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box } from '@material-ui/core';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.placeholder}</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" key={props?.key} onChange={props.onChange}>
        {
          props.options.map(e => {
            return (
              <Box key={props?.key} >
                <FormControlLabel value={e} control={<Radio />} label={e} />
              </Box>
            );
          })
        }
      </RadioGroup>
    </FormControl>
  );
}