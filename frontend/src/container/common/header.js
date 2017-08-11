/**
 * Created by finch on 2017/8/11.
 */
import React from 'react';

const Header = () => {
  return (
	  <nav className="navbar navbar-default">
		<div className="container-fluid">
		  <div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			  <span className="sr-only">Toggle navigation</span>
			  <span className="icon-bar"></span>
			  <span className="icon-bar"></span>
			  <span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="/">我的私人书架</a>
		  </div>

		  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<form className="navbar-form navbar-left">
			  <div className="form-group">
				<input type="text" className="form-control" placeholder="需要查询的书籍"/>
			  </div>
			  <button type="submit" className="btn btn-default">查询</button>
			</form>
			<ul className="nav navbar-nav navbar-right">
			  <li><a href="/user/signup">注册</a></li>
			  <li><a href="/user/login">登录</a></li>
			</ul>
		  </div>
		</div>
	  </nav>
  )
}


export default Header;