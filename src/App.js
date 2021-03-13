import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/default/Footer';
import Header from './components/default/Header';
import Login from './pages/Login';
import Covid from './pages/components/Covid';
import Home from './pages/Home';
import LocationSetting from './pages/LocationSetting';
import SignUp from './pages/SignUp';
import Withdrawal from './pages/Withdrawal';
import LogOut from './pages/LogOut';
import UserInfo from './pages/UserInfo';
import FindPsw from './pages/FindPsw';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/location" component={LocationSetting} />

          {/* <div className="auth-wrapper"> */}
          {/* <div className="auth-inner"> */}
          <div className="auth-temp">
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/log-out" component={LogOut} />
            <Route path="/user-info" component={UserInfo} />
            <Route path="/withdrawal" component={Withdrawal} />
            <Route path="/findPsw" component={FindPsw} />
          </div>
          {/* </div> */}
          {/* </div> */}
        </Switch>


        {/* <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path="/sign-in" component={Auth} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router> */}


      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
