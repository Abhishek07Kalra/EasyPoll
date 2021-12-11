import GoogleButton from "react-google-button";
import '../Login/Login.css';
import {auth , providerGoogle} from '../firebase/firebase';
const Login = () => {
    const GoogleLogin = () => {
        auth.signInWithPopup(providerGoogle).catch(alert);
    }
    return (
        <div className="body">
        <center>
        <div className={"div"}>
            <div className={"login"}>
                <GoogleButton onClick={GoogleLogin}></GoogleButton>
            </div>
        </div>
        </center>
        </div>
    );
  };
  export default Login;