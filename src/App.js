import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/default/Footer';
import Header from './components/default/Header';
import Login from './pages/Login';
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

          <div className="auth-temp">
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/log-out" component={LogOut} />
            <Route path="/user-info" component={UserInfo} />
            <Route path="/withdrawal" component={Withdrawal} />
            <Route path="/findPsw" component={FindPsw} />
          </div>
        </Switch>

      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
