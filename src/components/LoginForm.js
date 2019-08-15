import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  formContent: {
    borderRadius: 10,
    background: "#fff",
    width: "90%",
    maxWidth: 450,
    position: "relative",
    boxShadow: "0 30px 60px 0 rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    logo: {
      height: 100,
      padding: 20,
      width: 100
    }
  },
  formFooter: {
    backgroundColor: "#f6f6f6",
    borderTop: "1px solid rgba(102, 63, 180, 0.15)",
    padding: 25,
    textAlign: "center",
    borderRadius: "0 0 10px 10px",
    maxHeight: 70
  }
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      formClass: "fadeInDown",
      loggedIn: false,
      userAcronym: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.getAcronym = this.getAcronym.bind(this);
    this.sendDataToParent = this.sendDataToParent.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendDataToParent();
  };

  changeState = () => {
    if (this.state.inputValue !== "") {
      this.getAcronym();
      this.setState({ formClass: "fadeOutUp" });
      this.setState({ loggedIn: true });
    }
  };

  getAcronym = () => {
    if (this.state.inputValue !== "") {
      let acrom = this.state.inputValue.match(/[A-Z]/g).join("");
      this.setState({ userAcronym: acrom });
    }
    return true;
  };

  capitalize = s => {
    return s.toLowerCase().replace(/\b./g, function(a) {
      return a.toUpperCase();
    });
  };

  updateInput = event => {
    this.setState({ inputValue: this.capitalize(event.target.value) });
  };

  sendDataToParent = () => {
    this.changeState();
    this.props.upDateAcronym(this.state.userAcronym);
    this.props.upDateLoggin(this.state.loggedIn);
  };

  render() {
    return (
      <div
        className={this.state.formClass + " wrapper"}
        ref={this.props.containerRef}
      >
        <div id="formContent" style={styles.formContent}>
          <div className="fadeIn first">
            <img
              src="favicon-196x196.png"
              style={styles.formContent.logo}
              id="logo"
              alt="Modus Logo"
            />
            <h1>Welcome</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="fadeIn second">
              <input
                type="text"
                placeholder="Full Name (eg. 'Will Smith')"
                onChange={this.updateInput}
                requiredpattern="[a-zA-Z]+"
                required
              />
              <input type="password" placeholder="Password" />
            </div>

            <input
              type="submit"
              value="Login"
              onClick={this.changeState}
              className="fadeIn third"
            />
          </form>

          <div id="formFooter" style={styles.formFooter}>
            <span>
              Not register?
              <Link to="/">Sing Up</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
