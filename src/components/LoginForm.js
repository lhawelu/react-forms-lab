import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    let stateAttribute = e.target.name
    let stateValue = e.target.value
    this.setState({
      [stateAttribute]: stateValue
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    return !this.state.username || !this.state.password ? null : this.props.handleLogin({username: this.state.username, password: this.state.password})
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}  />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
