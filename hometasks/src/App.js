import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Decomposition from './components/Decomposition/Decomposition';
// import { Router, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/Cards">Cards</Link>
              </li>
              <li>
                <Link to="/Decomposition">Decomposition</Link>
              </li>
            </ul>
          </nav>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/Cards" component={Cards} />
          <Route exact path="/Decomposition" component={Decomposition} />
        </div>
      </Router>
    </div>
  );
}

export default App;