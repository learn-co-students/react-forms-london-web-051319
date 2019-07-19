// Code ControlledInput Component Here

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
 
  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}