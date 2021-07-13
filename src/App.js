import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../src/Components/User/SignUp';
import SignIn from './Components/User/SignIn';
import AdminSignUP from './Components/User/AdminSignUp';
import AdminProfilePage from './Components/Polling/AdminProfilePage';
import UserProfilePage from './Components/Polling/UserProfilePage';
import ViewCurrentPoll from './Components/Polling/ViewCurrentPoll';
import CreatePollQuestions from './Components/Polling/CreatePollQuestions';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="container text-center">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div>
          {/* <SignUp /> */}
          {/* <SignIn /> */}
          {/* <AdminSignUP /> */}
          {/* <AdminProfilePage /> */}
          <UserProfilePage />
          {/* <CreatePollQuestions /> */}
        </div>

        <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        {/* <Route path="/adminSignUp" component={AdminSignUP} /> */}
        </Switch>
      </header>
      <footer>
        ICP COPYRIGHT {currentYear}
      </footer>
    </main>
  );
}

export default App;
