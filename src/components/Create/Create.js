import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
const Create = () => {
    return (
      <center>
    <div className="home">
      <div className="buttons">
      <Button variant="contained" size="large">
        <Link className="buttons" to={"Single"}>
          Single Question
        </Link>
      </Button>
      <br/><br/><br/>
      <Button variant="contained" size="large">
        <Link className={"buttons"} to={"Multi"}>
          &nbsp; Multi Question &nbsp;
        </Link>    
      </Button>
      </div>
    </div>
    </center>
    );
  };
  export default Create;