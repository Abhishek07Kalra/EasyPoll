import '../Home/Home.css';
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
const Home = () => {
  return (
    <center>
    <div className="home">
      <div className="buttons">
      <Button variant="contained" size="large">
        <Link className="buttons" to={"/Create"}>
          Create Quiz
        </Link>
      </Button>
      <br/><br/><br/>
      <Button variant="contained" size="large">
        <Link className={"buttons"} to={"/Take"}>
          &nbsp; Take Quiz &nbsp;
        </Link>    
      </Button>
      <br/><br/><br/>
      <Button variant="contained" size="large">
        <Link className={"buttons"} to={"/Result"}>
        &nbsp;&nbsp;&nbsp; Result &nbsp;&nbsp;&nbsp;
        </Link>    
      </Button>
      </div>
    </div>
    </center>
  );
};
export default Home;