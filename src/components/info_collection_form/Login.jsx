import { Typography, Box, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import MuiButton from "../common/button";

const useStyle = makeStyles(theme => ({
  main: {
    background: "rgb(34, 193, 195)",
    background: "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(45, 94, 253, 0.742734593837535) 67%)",
    height: "100vh",
    width: "100%",
    color: "white",
  },

  heading: {
    margin: "0 auto"
  },
}))
const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate('/Form')
  }

  return (
    <Box className={classes.main}>
      <Typography variant="h2" className={classes.heading} >Welcome to  Info-Collection-Form</Typography>
      <MuiButton Click={clickhandler} value="Move to Form" color="primary"> </MuiButton>
    </Box>
  )
}
export default Login;