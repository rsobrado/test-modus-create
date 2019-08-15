import React, { Component } from "react";
// import ReactDOM from "react-dom";
import TopBar from "../components/TopBar";
import HomeContent from "../components/HomeContent";
import UserList from "../components/UserList";

// const ThemeContext = React.createContext(null);

export class Home extends Component {
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

  render() {
    const { loggedIn } = this.state;

    return (
      <div className="App">
        {!loggedIn && (
          <HomeContent
            upDateLoggin={this.upDateLoggin}
            upDateAcronym={this.upDateAcronym}
          />
        )}
        {loggedIn && (
          <TopBar
            userAcronym={this.state.userAcronym}
            upDateLoggin={this.upDateLoggin}
          />
        )}
        <div className="container">
          <div className="row">{loggedIn && <UserList />}</div>
        </div>
      </div>
    );
  }
}

export default Home;
