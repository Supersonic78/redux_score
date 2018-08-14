import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
import { updateUser2 } from "./actions/user-actions";
import { updateTest } from "./actions/test-actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onUpdateUser2 = this.onUpdateUser2.bind(this);
    this.onUpdateTest = this.onUpdateTest.bind(this);
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }
  onUpdateUser2() {
    this.props.onUpdateUser2();
  }
  onUpdateTest(event) {
    this.props.onUpdateTest(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser2} />
        <input onChange={this.onUpdateTest} />
        {this.props.user}
        <hr />
        {this.props.test}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  test: state.test
});
const mapActionsToProps = {
  onUpdateUser: updateUser,
  onUpdateUser2: updateUser2,
  onUpdateTest: updateTest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
