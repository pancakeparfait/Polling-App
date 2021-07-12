import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../src/Components/User/SignUp';
import SignIn from './Components/User/SignIn';
import AdminSignUP from './Components/User/AdminSignUp';
import AdminWelcomePage from './Components/Polling/AdminWelcomePage';
import UserWelcomePage from './Components/Polling/UserWelcomePage';
import ViewCurrentPoll from './Components/Polling/ViewCurrentPoll';
import CreatePollQuestions from './Components/Polling/CreatePollQuestions';


function App() {
  return (
    <main className="container">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div>
          {/* <SignUp /> */}
          <SignIn />
          {/* <AdminSignUP /> */}
          {/* <AdminWelcomePage /> */}
          {/* <UserWelcomePage /> */}
          {/* <CreatePollQuestions /> */}
        </div>
        
        <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/adminSignUp" component={AdminSignUP} />
        </Switch>
      </header>
      <footer>
        {/* ICP COPYRIGHT {new Date().getfullYear()} */}
      </footer>
    </main>
  );
}

export default App;
