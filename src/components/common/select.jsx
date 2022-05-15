import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    props?.onChange(event)
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label" key={props?.id}></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          multiple={props.multiple}
          key={props?.key}
          name={props.name}
        >
          {
            props.options.map(e => {
              return (
                <MenuItem value={e}>{e}</MenuItem>
              );
            })
          }
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}

export default SimpleSelect;