import { TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  textarea: {
    width: "300px",
  }
}))
export default function Textarea(props) {
  const classes = useStyles();
  return (
    <>
      <TextareaAutosize key={props?.key} className={classes.textarea} name={props.name} placeholder={props.placeholder} value={props?.value} onChange={props?.onChange}></TextareaAutosize>
    </>
  );
}