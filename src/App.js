import React from "react";


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
       password: "",
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }
  handleSubmit(event) {
    alert("Ваш имя: " + this.state.value + "Ваш пароль: " + this.state.password);
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: "", password: ""});
  }

  render() {
    return (
      <div className="nameText">
         <form onSubmit={this.handleSubmit}>
          <div className="text">
          <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
          </div>
          <div className="password">
          <input 
        value={this.state.password}
        onChange={this.handlePasswordChange}
        type="password"
        />
          </div>
        <div className="submit">
        <button  type="submit">Войти</button>
        </div>
      </form>
      </div>
     
    );
  }
}

export default NameForm;