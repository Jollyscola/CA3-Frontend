import React, { Component } from "react"
import LoggedIn from "./LogIn";
import Image from "./image/star-wars-wallpaper-photo-On-wallpaper-hd.jpg";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    console.log("This.props.login: ", this.props.login);
    this.props.login(this.state.username, this.state.password);
  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div className="text-center">
        <div>
          <h2>Login</h2>
          <form onSubmit={this.login} onChange={this.onChange} >
            <input placeholder="User Name" id="username" />
            <input placeholder="Password" id="password" />
            <button>Login</button>
          </form>
        </div>
        <br/>
        <div>
          <img src={Image}  className="img-responsive" alt="star wars" height="400 px" />
        </div>
      </div>
    )
  }
}

class AuthenticationStatus extends Component {
  
  render() {
    return (
      <div>
        {!this.props.loggedIn ? (
          <LogIn login={this.props.login} />) :
          (<div className="text-center">
            <LoggedIn />
            <button onClick={this.props.logout}>Logout</button>
          </div>)}
      </div>
    )
  }
}
export default AuthenticationStatus;
