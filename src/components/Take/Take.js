import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../SingleMode/SingleMode.css';
import {db} from '../firebase/firebase';
import {useState } from 'react';
import _ from "lodash";
import '../SingleMode/SingleMode.css';
const Take = () => {
  const [Data , setData] = useState([]);
  const [submitClick , setSubmitClick] = useState(false);
  
  const click = () => {
    setSubmitClick(!submitClick);
  }

  const getData = () => {
    var doc = db.collection("data").doc("31de3170-72ad-4bb4-9318-aee843990745");
    doc.get().then((data) => {
        setData(data.data());
        console.log(data.data());
        {
          Object.keys(Data).map((item) => {
              console.log(item[1]);
          })
        }
    })
  }

    return (
      <div className="take">
        {
        !submitClick ?
        <Card className="form" style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center'}} >
        <CardContent >
            <Typography style={{display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}>
                <TextField sx={{ minWidth: 575}} label="Enter Code" />
                <Button onClick={click} style={{marginLeft:'20px'}} size="large" variant="contained">Submit</Button>
            </Typography>
          </CardContent>
        </Card>
        :
        <RenderData click={click}/>
      }
      </div>
    );
  };
const RenderData = ({click}) => {
  return (
    <Card className="form" >
    <CardContent>
      <Typography>
        <TextField sx={{color:'black' , minWidth: 575 ,marginBottom : 2 }} value={"Are you male"} />
      </Typography>
      <Typography>
        <TextField sx={{ minWidth: 175 , marginBottom : 2 }} value={"YES"} />
        <br/>
        <TextField sx={{ minWidth: 175 , marginBottom : 2 }} value="NO" />
        </Typography>
        <CardActions>
            <Button onClick={click} size="large" variant="contained" sx={{ position: 'absolute', right: 340 , marginBottom : 0}}>Submit</Button>
            </CardActions> 
    </CardContent>
    </Card>
  );
}
  export default Take;