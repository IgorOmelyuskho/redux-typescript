import React from 'react';
import './App.scss';
import SharedHeader from './components/SharedHeader/SharedHeader';
import { Provider } from 'react-redux';
import { Store } from '../src/store/reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ForProgramRouting from './services/ForProgramRouting/ForProgramRouting';
import ReactNotification from 'react-notifications-component';
import Index from './components/Index/Index';
import SignIn from './components/SignIn/SignIn';
import EmailValidate from './components/EmailValidate/EmailValidate';
import Vendor from './components/Vendor/Vendor';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './components/SignUp/SignUp';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = React.createContext(themes.light);

const TestRouter = () => (
  <h1>TestRouter</h1>
)

const TestRouter_2 = () => (
  <h1>TestRouter_2</h1>
)

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeContext.Provider value={themes.light}>
          <ReactNotification />
          <BrowserRouter>
            <div>
              <ForProgramRouting />
              <SharedHeader />
              <Switch>
                <Route exact path="/" component={Index} />
                {/* <Route path="/signin" component={SignIn} /> */}
                <Route path="/signin" render={matchProps => <SignIn {...matchProps} />} />
                <Route path="/signup" component={SignUp} />
                <Route path="/test_router" component={TestRouter} />
                <Route path="/test_router_2" component={TestRouter_2} />
                <Route path="/email-validate/:code" component={EmailValidate} />
                {/* <Route path="/vendor" render={() => <Vendor store={this.props.store} />} /> */}
                <Route path="/vendor" render={() => <Vendor />} />
                <Route component={Index} /> {/* redirect */}
              </Switch>
            </div>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
