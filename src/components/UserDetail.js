import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserDetail extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id={this.props.name}
        role="dialog"
        aria-labelledby="userDetailLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userDetailLabel">
                User Information
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src={this.props.photo}
                alt={this.props.lastname}
                className="rounded"
              />
              <h3>
                {" "}
                {this.props.name} {this.props.lastname}
              </h3>
              <h4>
                <i className="fa fa-envelope" aria-hidden="true" />{" "}
                <Link to={"mailto:" + this.props.email}>
                  {this.props.email}
                </Link>
              </h4>
              <h4>
                <i className="fa fa-phone" aria-hidden="true" />{" "}
                <Link to={"mailto:" + this.props.phone}>
                  {this.props.phone}
                </Link>{" "}
              </h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
