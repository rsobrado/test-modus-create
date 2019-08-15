import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Button from "./Button";
import LoginForm from "./LoginForm";
// import { Button } from "react-bootstrap";

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn || false,
      userAcronym: this.props.userAcronym || ""
    };
    this.upDateAcronym = this.upDateAcronym.bind(this);
    this.upDateLoggin = this.upDateLoggin.bind(this);
  }
  upDateAcronym = childData => {
    this.setState({ userAcronym: childData });
  };
  upDateLoggin = childData => {
    this.setState({ loggedIn: childData });
  };
  componentDidUpdate(prevProps, prevState) {
    this.props.upDateAcronym(this.state.userAcronym);
    this.props.upDateLoggin(this.state.loggedIn);
  }
  render() {
    return (
      <div>
        <LoginForm
          upDateLoggin={this.upDateLoggin}
          upDateAcronym={this.upDateAcronym}
        />
      </div>
    );
  }
}
