import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
 
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    );
  }
}
 
export default ControlledInput;