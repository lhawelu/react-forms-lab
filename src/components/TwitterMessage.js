import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
      charactersAllowed: this.props.maxChars,
      message: ''
  }

  handleChange = (e) => {
    let updatedMessage = e.target.value
    let remainCharaters = this.props.maxChars - e.target.value.length
    this.setState({
      charactersAllowed: remainCharaters,
      message: updatedMessage
    }) 
  }

  displayCharRemaining = () => {
    if (this.state.charactersAllowed >= 280)
    {return <div>Maximum Characters Allowed: {this.state.charactersAllowed}</div>} else {
    return <div>Remaining Characters: {this.state.charactersAllowed}</div>}
  }

  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleChange(e)} />
        {this.displayCharRemaining()}
      </div>
    );
  }
}

export default TwitterMessage;
