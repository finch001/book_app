/**
 * Created by finch on 7/21/17.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './container/user/Login';
import Signup from './container/user/Signup';
import BookContent from './container/BookContent';
import Header from './container/common/header';
import NotFound from './container/NotFound';

const Routes = (props) => (
	<Router {...props}>
	  <div>
		<Header/>
		<div>
		  <Switch>
			<Route path='/user/signup' component={Signup}/>
			<Route path='/user/login' component={Login}/>
			<Route path='/' component={BookContent}/>
		  </Switch>
		</div>
	  </div>
	</Router>
);

export default Routes;