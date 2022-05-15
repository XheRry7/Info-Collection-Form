import { TextField } from '@material-ui/core'
import { useState } from 'react';
const TextfieldMui = (props) => {
  return (
    <TextField
      error={props.error}
      name={props.name}
      id={props?.id}
      placeholder={props?.placeholder}
      required={props?.required}
      type={props?.type}
      value={props?.value}
      onChange={props?.onChange}
      key={props?.key}
      helperText={props.helperText}
      variant="outlined"
    />
  )
}
export default TextfieldMui;