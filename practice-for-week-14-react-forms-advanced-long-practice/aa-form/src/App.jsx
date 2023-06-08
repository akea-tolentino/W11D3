import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import PreferencesSurvey from "./components/PreferencesSurvey";
import SampleSurvey from "./components/SampleSurvey";
import './cssReset.css';
import img from './logo.png';

function App() {
  return (
    <>
      <Link to='/'><img src={img}></img></Link>
      <NavBar />
      <Switch>
        <Route path="/preferences"> 
          <PreferencesSurvey />
        </Route>
        <Route path="/sample">
          <SampleSurvey />
        </Route>
        <Route path="/"><div className="welcome">Welcome to App Academy! Please select a survey.</div></Route>
      </Switch>
    </>
  );
}

export default App;
