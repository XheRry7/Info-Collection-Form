import React from 'react';
import Button from '@material-ui/core/Button';

export default function MuiButton(props) {
  return (
    <Button variant="contained" color="primary" onClick={props.Click}>
      {props.value}
    </Button>
  );
}