import React, {Component} from 'react';
import logo from '../assert/img/logo.svg';
import '../css/App.css';

import NewBook from './Newbook';

class BookContent extends Component {
  render() {
	return (
		<div className="maincontent">
		  <NewBook />
		</div>
	);
  }
}

export default BookContent;
