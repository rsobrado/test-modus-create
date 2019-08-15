import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn || true
    };
    this.logOff = this.logOff.bind(this);
  }

  logOff = () => {
    // this.setState({ loggedIn: false });
    this.props.upDateLoggin(false);
  };
  render() {
    return (
      <header
        style={{
          minHeight: 70,
          width: "100%",
          background: "linear-gradient(87deg,#825ee4,rgb(102,63,180))",
          color: "white",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          boxShadow: "0 0 2rem 0 rgba(136,152,170,.15)"
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div style={styles.logo}>
            <Link to="/">
              <img
                alt={"logo"}
                style={{ maxHeight: 40, flex: 1, paddingRight: 10 }}
                src="favicon-196x196.png"
              />
              {"Modus Create"}
            </Link>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#dropDownMenu"
            aria-controls="dropDownMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-collapse collapse " id="dropDownMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <span className="avatar"> {this.props.userAcronym} </span>
              </li>
              <li className="nav-item">
                <button onClick={this.logOff} className="btn btn-danger btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};
