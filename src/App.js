import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Menubar from './components/default/Menubar';
import Footer from './components/default/Footer';
import Header from './components/default/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import LocationSetting from './pages/LocationSetting';
import SignUp from './pages/SignUp';
import Withdrawal from './pages/Withdrawal';
import UserInfo from './pages/UserInfo';
import FindPsw from './pages/FindPsw';
import { Component } from 'react';
import { Spinner } from "react-bootstrap";
import { ACCESS_TOKEN } from './pages/Index';
import { getCurrentUser } from './pages/components/UserAPIs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  loadCurrentUser(){
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });
    });
  }

  componentDidMount(){
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/"){
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
  }

  handleLogin(){
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render(){
    if(this.state.isLoading) {
      return <Spinner className="loading" animation="border" /> 
    }
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Menubar isAuthenticated={this.state.isAuthenticated}
           currentUser={this.state.currentUser}
           onLogout={this.handleLogout} />
        </header>

        <Switch>
          <>
          <Route exact path="/"
            render={(props) => <Home isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser}
            onLogout={this.handleLogout} {...props} />}/>
          <Route path="/location" render={(props) => <LocationSetting isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />} />

          <div className="auth-temp">
            <Route path="/sign-in" render={(props) => <Login onLogin={this.handleLogin} {...props} />} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/user-info" render={(props) => <UserInfo isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} />} />
            <Route path="/withdrawal" render={(props) => <Withdrawal isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} onLogout={this.handleLogout} {...props} />} />
            <Route path="/findPsw" component={FindPsw} />
          </div>
          </>
        </Switch>

      </div>
      {/* <footer className="App-footer">
        <Footer />
      </footer> */}
    </Router>
    );
  }

}

// function App() {

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Header />
//         </header>

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/location" component={LocationSetting} />

//           <div className="auth-temp">
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//             <Route path="/log-out" component={LogOut} />
//             <Route path="/user-info" component={UserInfo} />
//             <Route path="/withdrawal" component={Withdrawal} />
//             <Route path="/findPsw" component={FindPsw} />
//           </div>
//         </Switch>

//       </div>
//       <footer className="App-footer">
//         <Footer />
//       </footer>
//     </Router>
//   );
// }

export default withRouter(App);
