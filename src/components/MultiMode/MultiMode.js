import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../SingleMode/SingleMode.css';
import {db} from '../firebase/firebase';
import {useState} from 'react';
import _ from "lodash";
import Autocomplete from '@mui/material/Autocomplete';
const MultiMode = () => {
    const [option , setOption] = useState("0");
    const [question , setQuestion] = useState("");
    const [optionData , setOptionData] = useState([]);
    const submitData = () => {
  
    }

    const handleChange = (e , index) => {
        optionData[index] = e.target.value;
    }

    const copy = (data) => {
        var textField = document.createElement("textarea");
        textField.innerText = data;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }
    return (
      <div>
          <Card className="form" sx={{ minWidth: 775 , padding : 2}}>
          <Autocomplete
            id="combo-box-demo"
            options={data}
            value={option}
            sx={{ width: 100 , marginLeft : 2 }}
            onChange={(event, newValue) => {
                setOption(newValue);
              }}
            renderInput={(params) => <TextField {...params} label="Questions" />}
            />
            {_.times(option.label, (i) => (
            <Content index = {i} setQuestion = {setQuestion} handleChange={handleChange}/>
          ))}
            <CardActions>
            <Button onClick={submitData} size="large" variant="contained" sx={{ position: 'absolute', right: 300 , marginBottom : 4}}>Submit</Button>
            </CardActions>      
          </Card>
      </div>
    )
  };

  const Content = ({index , setQuestion , handleChange}) => {
      return (
        <CardContent>
            <Typography>
                <TextField onChange={(e) => setQuestion(e.target.value)} sx={{ minWidth: 575 ,marginBottom : 2 }} label="Enter Question" />
            </Typography>
            {_.times(4, (i) => (
            <Options index = {index + i} handleChange={handleChange}/>
            ))}
          <Divider/>
          <br/><br/>
        </CardContent>
    );
  }

  const Options = ({index , handleChange}) => {
      return (
        <Typography>
        <TextField key={index} onChange={(e) => handleChange(e , index)} sx={{ minWidth: 175 , marginBottom : 2 }} label="Enter Options" />
        </Typography>
      );
  }

  const data = [
      {label : "1"},
      {label : "2"},
      {label : "3"},
      {label : "4"},
      {label : "5"},
      {label : "6"},
      {label : "7"},
      {label : "8"},
      {label :  "9"},
      {label : "10"},
      {label : "11"},
      {label : "12"}
  ]
  export default MultiMode;