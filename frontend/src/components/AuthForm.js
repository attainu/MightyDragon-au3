import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import "../styles/AuthForm.css"

class AuthForm extends Component {
  state = { username: '', password: '', buttonClicked: false };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  signup = () => {
    this.setState({ buttonClicked: true });

    const { username, password } = this.state;

    this.props.signup({ username, password });
  }

  login = () => {
    this.setState({ buttonClicked: true });

    const { username, password } = this.state;

    this.props.login({ username, password });
  }
 // eslint-disable-next-line
  get Error() {
    if (
      this.state.buttonClicked &&
      this.props.account.status === fetchStates.error
    ) {
      return <div>{this.props.account.message}</div>
    }
  }

  render() {
    return (
      <div classNameName="container register">
    <div className="container h-100">
    
   <div className="d-flex justify-content-center h-100">
     <div className="user_card">
     <h3> Mighty Dragon </h3>
       <div className="d-flex justify-content-center">
     
       </div>
       <div className="d-flex justify-content-center form_container">
         <form>
           <div className="input-group mb-3">
             <div className="input-group-append">
               <span className="input-group-text"><i className="fas fa-user"></i></span>
             </div>
             <input type="text" name="" className="form-control input_user" value={this.props.username} onChange={this.updateUsername} placeholder="username"/>
           </div>
           <div className="input-group mb-2">
             <div className="input-group-append">
               <span className="input-group-text"><i className="fas fa-key"></i></span>
             </div>
             <input type="password" name="" className="form-control input_pass" value={this.props.username} onChange={this.updateUsername} placeholder="password"/>
           </div>
           <div className="form-group">
             <div className="custom-control custom-checkbox">
               <input type="checkbox" className="custom-control-input" id="customControlInline"/>
               <label className="custom-control-label" for="customControlInline">Remember me</label>
             </div>
           </div>
             <div className="d-flex justify-content-center mt-3 login_container">
          <button type="button" onClick={this.signup} name="button" className="btn login_btn">Signup</button>
                  <span>or</span>
                    <button type="button" onClick={this.login} name="button" className="btn login_btn">Login</button>

          </div>
         </form>
       </div>
   
       
     </div>
   </div>
 </div>

       
        <div>
 </div>
        <br />
        {this.Error}
      </div>
    )
    
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup, login }
)(AuthForm);