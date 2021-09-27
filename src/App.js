import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/SignIn/Login';
import ContactPage from './Components/ContactUs/ContactPage';
import Signup from './Components/SignUp/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import DefaultLayout from './layout/default';



function App() {
  return (
    <div className="App">
     
      <Router>
          <div className="App">
              <Switch>
                <Route path="/" exact component={Landing} />
                <ProtectedRoute path="/app" component={DefaultLayout}/>
                <Route path="/login" exact component={Login} />
                <Route path="/contactus" exact component={ContactPage} />
                <Route path="/signup" exact component={Signup} />
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
