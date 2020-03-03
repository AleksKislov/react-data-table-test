import React, { Fragment, Component } from "react";
import Spinner from "./spinner.gif";
import { v4 as uuidv4 } from "uuid";
import AddUser from "./AddUser";
import PropTypes from "prop-types";

class DataTable extends Component {
  state = {
    arrowDown: "fas fa-sort-down",
    arrowUp: "fas fa-sort-up"
  };

  onClick = e => {
    const arrows = document.getElementsByClassName(this.state.arrowUp);

    if (e.target.className === this.state.arrowUp) {
      e.target.className = this.state.arrowDown;
      this.props.sortDescend(e.target.innerHTML);
    } else {
      while (arrows.length > 0) {
        arrows[0].className = this.state.arrowDown;
      }

      e.target.className = this.state.arrowUp;
      this.props.sortAscend(e.target.innerHTML);
    }
  };

  render() {
    const { users, loading, getOneUser, addNewUser, error } = this.props;
    const { arrowDown } = this.state;

    const tableHead = (
      <thead>
        <tr>
          <th>
            <i className={arrowDown} onClick={this.onClick}>
              id
            </i>
          </th>
          <th>
            <i className={arrowDown} onClick={this.onClick}>
              firstName
            </i>
          </th>
          <th>
            <i className={arrowDown} onClick={this.onClick}>
              lastName
            </i>
          </th>
          <th>
            <i className={arrowDown} onClick={this.onClick}>
              email
            </i>
          </th>
          <th>
            <i className={arrowDown} onClick={this.onClick}>
              phone
            </i>
          </th>
        </tr>
      </thead>
    );

    if (loading) {
      return (
        <div>
          <table className='table table-hover'>{tableHead}</table>
          <Fragment>
            <img src={Spinner} alt='Loading...' className='mx-auto d-block' />
          </Fragment>
        </div>
      );
    } else {
      return (
        <div>
          <table className='table table-hover'>
            {tableHead}
            <tbody>
              {addNewUser && (
                <AddUser addNewUserFunc={this.props.addNewUserFunc} />
              )}
              {error && (
                <tr>
                  <td colSpan='5' style={{ color: "red" }}>
                    {error}
                  </td>
                </tr>
              )}
              {users.map(user => (
                <tr key={uuidv4()} onClick={getOneUser.bind(this, user)}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

// prop types
DataTable.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  getOneUser: PropTypes.func.isRequired,
  addNewUser: PropTypes.bool.isRequired,
  addNewUserFunc: PropTypes.func.isRequired,
  sortDescend: PropTypes.func.isRequired,
  sortAscend: PropTypes.func.isRequired
};

export default DataTable;
