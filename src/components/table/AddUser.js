import React, { Component, Fragment } from "react";
// import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export class AddUser extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    newUserReady: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    setTimeout(() => {
      this.checkState();
    }, 0);
  };

  checkState = () => {
    if (
      this.state.id.length !== 0 &&
      this.state.firstName.length !== 0 &&
      this.state.lastName.length !== 0 &&
      this.state.email.length !== 0 &&
      this.state.phone.length !== 0
    ) {
      this.setState({ newUserReady: true });
    } else {
      this.setState({ newUserReady: false });
    }
  };

  onClick = () => {
    this.props.addNewUserFunc(this.state);
    this.setState({ id: "" });
    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ phone: "" });
    this.setState({ newUserReady: false });
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>
            <form>
              <input
                type='text'
                name='id'
                value={this.state.id}
                placeholder='Add id'
                onChange={this.onChange}
              />
            </form>
          </td>
          <td>
            <form>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                placeholder='Add firstName'
                onChange={this.onChange}
              />
            </form>
          </td>
          <td>
            <form>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                placeholder='Add lastName'
                onChange={this.onChange}
              />
            </form>
          </td>
          <td>
            <form>
              <input
                type='email'
                name='email'
                value={this.state.email}
                placeholder='Add email'
                onChange={this.onChange}
              />
            </form>
          </td>
          <td>
            <form>
              <input
                type='text'
                name='phone'
                value={this.state.phone}
                placeholder='Add phone'
                onChange={this.onChange}
              />
            </form>
          </td>
        </tr>
        {this.state.newUserReady && (
          <tr>
            <td colSpan='5'>
              <button
                type='button'
                className='btn btn-success btn-block'
                onClick={this.onClick}
              >
                Добавить в Таблицу
              </button>
            </td>
          </tr>
        )}
      </Fragment>
    );
  }
}

AddUser.propTypes = {
  addNewUserFunc: PropTypes.func.isRequired
};

export default AddUser;
