import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserDetail } from "./UserDetail";

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed.");
        }
        return response;
      })
      .then(data => data.json())
      .then(
        data => {
          this.setState({
            users: data.results
          });
          // console.log("parsed json", this.state.users);
        },
        ex => {
          this.setState({
            requestError: true
          });
          // console.log("parsing failed", ex);
        }
      );
  }
  render() {
    const users = this.state.users;
    return (
      <div className="col-md-12">
        <table className="table" cellSpacing="0">
          <thead>
            <tr>
              <th className="view" />
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.email}>
                <td className="view">
                  <Link
                    to="/"
                    data-toggle="modal"
                    data-target={"#" + user.name.first}
                  >
                    <i className="fa fa-eye" aria-hidden="true" />
                  </Link>
                  <UserDetail
                    name={user.name.first}
                    lastname={user.name.last}
                    email={user.email}
                    phone={user.phone}
                    photo={user.picture.large}
                  />
                </td>
                <td>
                  <Link
                    to="/"
                    data-toggle="modal"
                    data-target={"#" + user.name.first}
                  >
                    {user.name.first}
                  </Link>
                </td>
                <td>
                  <Link
                    to="/"
                    data-toggle="modal"
                    data-target={"#" + user.name.first}
                  >
                    {user.name.last}
                  </Link>
                </td>
                <td className="email">
                  <Link to={"mailto:" + user.email}>{user.email}</Link>
                </td>
                <td>
                  <Link to={"tel:" + user.phone}>{user.phone}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
