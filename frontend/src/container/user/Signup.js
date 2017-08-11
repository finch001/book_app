/**
 * Created by finch on 8/9/17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


export class Signup extends Component {
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

  handleFormSubmit({email, username, password}) {
    console.log(email, username, password);

  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div style={{width: '60%', margin: '0px auto'}}>
        <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="username" component={this.renderField} type="text" label="用户名"/>
          <Field name="password" component={this.renderField} type="password" label="密码"/>
          <Field name="email" component={this.renderField} type="email" label="邮箱"/>

          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-4">
              <button type="submit" className="btn btn-default">注册</button>
            </div>
          </div>
        </form>
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
  if (!values.email) {
    errors.email = '邮箱不能为空'
  }
  return errors;
};

const reduxSignForm = reduxForm({
  form: 'singup_form',
  validate
})(Signup);

export default connect()(reduxSignForm);