import arr from "./data";
import SimpleSelect from "../common/select";
import TextfieldMui from "../common/textfiled";
import { Box, makeStyles, Typography } from "@material-ui/core";
import RadioButtonsGroup from "../common/radio";
import Textarea from "../common/textarea";
import MuiButton from "../common/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  field: {
    margin: "10px",
    alignItems: "center"
  },
  label: {
    textTransform: "capitalize",
    float: "left"
  },
  main: {
    height: "auto",
    width: "100%",
    background: "rgb(34, 193, 195)",
    background: "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(45, 94, 253, 0.742734593837535) 67%)"
  },
  container: {
    height: "auto",
    width: "700px",
    background: "white",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "20px",
  },
  heading: {
    textAlign: "center",
    color: "white"
  }

}));
const Form = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setdata] = useState("");
  const [names, setnames] = useState("")
  const [error, setError] = useState({})

  const changehandler = (name, value) => {
    setdata({ ...data, [name]: value })
    setnames(name);
  }
  const datahandler = () => {
    const errorObj = { ...error }
    arr.map((item) => {

      if (item.required) {
        if (!data[item.id] || data[item.id] == "") {
          errorObj[item.id] = true
          setError(errorObj)
        } else {
          errorObj[item.id] = false
          setError(errorObj)
        }
      }
    })
    if (Object.values(errorObj).includes(true)) {
      console.log("please fill the required fields first")
    } else {
      console.log(data);
      navigate('/Success')
    }
  }
  return (
    <Box className={classes.main}>
      <Typography className={classes.heading} variant="h3">Info Collection Form</Typography>
      <Box className={classes.container}>
        {arr.map((e, id) => {
          if (e.type === 'text') {
            return (
              <Box key={id}>
                <label>{e.id}</label>
                <div className={classes.field} >
                  <TextfieldMui error={error[e.id] ? "error occur" : ""} helperText={error[e.id]} placeholder={e.placeholder} required={e.required} name={e.id} onChange={e => changehandler(e.target.name, e.target.value, id)} />
                </div>
              </Box>
            )
          }
          else if (e.type === 'select' && e.id === "jobTitle") {
            return (
              <Box key={id}>
                <label>{e.placeholder}</label>
                <SimpleSelect id={e.id} placeholder={e.placeholder} key={id} name={e.id} options={e.options} onChange={e => changehandler(e.target.name, e.target.value)} ></SimpleSelect>
              </Box>
            )
          }
          else if (e.type === 'textarea') {
            return (
              <Box key={id}>
                <label >{e.id}</label>
                <div className={classes.field} >
                  <Textarea key={e.id} placeholder={e.placeholder} name={e.id} onChange={e => changehandler(e.target.name, e.target.value)} ></Textarea>
                </div>
              </Box>
            )
          }
          else if (e.type === 'select' && e.id === "exerience") {
            return (
              <Box key={id}>
                <RadioButtonsGroup id={e.id} key={e.id} placeholder={e.placeholder} name={e.id} options={e.options} onChange={e => changehandler(e.target.name, e.target.value)} ></RadioButtonsGroup>
              </Box>
            )
          }
          else if (e.type === 'selects' && e.id === "exerience") {
            return (
              <Box key={id}>
                <label>{e.placeholder}</label>
                <SimpleSelect id={e.id} placeholder={e.placeholder} key={id} name={e.id} value={data} multiple={e.multiple} options={e.options} onChange={e => changehandler(e.target.name, e.target.value)} > </SimpleSelect>
              </Box>
            )
          }
        }
        )
        }
        <MuiButton value="Get Data" Click={datahandler} color="primary" > </MuiButton>
      </Box>
    </Box>
  )
}
export default Form;