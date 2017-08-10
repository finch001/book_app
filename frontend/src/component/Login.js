/**
 * Created by finch on 8/9/17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

  }

  renderField({input, label, type, meta: {touched, error}}) {
    return (
      <div className={`form-group has-feedback ${touched && error ? 'has-error' : ''}`}>
        <label className="col-sm-4 control-label"><strong>{label}</strong></label>
        <div className="col-sm-4">
          <input {...input} placeholder={label} type={type} className="form-control"/>
          <div className="help-block with-errors">{touched && error ? error : ''}</div>
        </div>
      </div>
    )
  }

  handleFormSubmit({username, password}) {
    console.log(username, password);

  }

  render() {
    const {handleSubmit} = this.props;
    return (

      <div>
        <div style={{width: '60%', margin: '0px auto'}}>
          <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name="username" component={this.renderField} type="text" label="用户名"/>
            <Field name="password" component={this.renderField} type="password" label="密码"/>

            <div className="form-group">
              <div className="col-sm-offset-4 col-sm-4">
                <button type="submit" className="btn btn-default">登录</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = '用户名不能为空'
  }
  if (!values.password) {
    errors.password = '密码不能为空'
  }

  return errors;
};

const reduxLoginForm = reduxForm({
  form: 'login_form',
  validate
})(Login);

export default connect()(reduxLoginForm);
