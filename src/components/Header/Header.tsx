import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import './Header.scss';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import my_history_2 from '../../services/HistoryModule';
import AuthService from '../../services/AuthService';
import { TranslateService } from '../../services/TranslateService';

const HomeButton = withRouter(({ history }) => (  /* 1 way */
  <button
    className="btn btn-primary"
    type='button'
    onClick={() => { history.push('/vendor') }}
  >
    Home
  </button>
));

const SignOutButton = () => (  /* 2 way */
  <Route render={({ history }) => (
    <button
      className="btn btn-primary"
      type='button'
      onClick={() => { AuthService.signOut() }}
    >
      SignOut
    </button>
  )} />
)

const Header: React.SFC<IHeaderProps> = (props) => {
  const [redirect, setRedirect] = React.useState(false);

  const setLanguage = (event) => {
    TranslateService.setLanguage(event.target.value);
  }

  const setRedirectValue = () => {  /* for 7 way */
    setRedirect(true);
  }

  const renderRedirect = () => { /* for 7 way */
    if (redirect) {
      return <Redirect to='/vendor' />
    }
  }

  return (
    <div className="header">
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">IIUA</span>
        </Link>
        <div className='navbar-text'>Navbar for signin, signup and index</div>
        <span className='d-flex'>
          <HomeButton />
          <SignOutButton />
          {/* <button onClick={() => { props.history.push('/test_router') }}>click</button>  */} {/* 5 way */}
          <button onClick={() => { my_history_2.push('/test_router_2') }}>click_2</button>  {/* 6 way */}
          {renderRedirect()}
          <button onClick={setRedirectValue}>Home</button>  {/* 7 way */}
          <Link className="nav-link" to="/signin">Sign in</Link>
          <Link className="nav-link" to="/signup"> Sign up</Link>
          <select defaultValue={TranslateService.lang === 'en' ? 'en' : 'ru'} className="language" onChange={setLanguage}>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </span>
      </nav>
    </div>
  );
};

export default Header;
