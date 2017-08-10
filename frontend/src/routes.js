/**
 * Created by finch on 7/21/17.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './component/Login';
import Signup from './component/Signup';
import App from './component/App';
import NotFound from './component/NotFound';

const Routes = (props) => (
  <div>
    <App/>
    <div>
      <Router {...props}>
        <Switch>
          <Route path={`/user/signup`} component={Signup}/>
          <Route path={`/user/login`} component={Login}/>
        </Switch>
      </Router>
    </div>
  </div>
);

export default Routes;