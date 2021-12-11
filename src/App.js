import {auth} from './components/firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Take from './components/Take/Take';
import LoaderComp from './components/LoaderComp/LoaderComp';
import Login from './components/Login/Login';
import SingleMode from './components/SingleMode/SingleMode';
import MultiMode from './components/MultiMode/MultiMode';
import Result from './components/Result/Result';
function App() {
  const [user , loading] = useAuthState(auth);
  return (
    loading ? 
    <LoaderComp/>
    :
    !user ? 
    <Login/>
    :
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/Create" element = {<Create/>}/>
        <Route exact path="/Take" element = {<Take/>}/>
        <Route exact path="/Result" element = {<Result/>}/>
        <Route exact path="/Create/Single" element = {<SingleMode/>}/>
        <Route exact path="/Create/Multi" element = {<MultiMode/>}/>
      </Routes>
    </Router>
  );
}

export default App;
