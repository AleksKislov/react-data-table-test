import React, { Component } from "react";
import "./App.css";
import DataTable from "./components/table/DataTable";
import Search from "./components/buttons/Search";
import OneUser from "./components/table/OneUser";
import SelectDataButtons from "./components/buttons/SelectDataButtons";
import AddUserButtons from "./components/buttons/AddUserButtons";
import Pagination from "./components/Pagination";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    searching: [],
    loading: false,
    user: {},
    addNewUser: false,
    newUser: {},
    currentPage: 1,
    rowsPerPage: 30,
    indexOfLastPerson: null,
    indexOfFirstPerson: null,
    currentPeople: [],
    error: undefined
  };

  searchData = text => {
    let searchResuslt = this.state.searching.filter(item =>
      item.firstName.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ users: searchResuslt });

    this.paginateTimeOut();
  };

  fetchData = async url => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(url);
      this.setState({
        users: res.data,
        loading: false,
        searching: res.data,
        error: undefined
      });
      this.paginateTimeOut();
    } catch (error) {
      return this.setState({
        loading: false,
        error: "Oops! Something is not right!"
      });
    }
  };

  // get person info below the table
  getOneUser = user => {
    this.setState({ user });
  };

  // init forms with input for adding new person
  addUserInit = () => {
    this.setState({ addNewUser: true });
  };

  // adding new person to our list of people/users
  addNewUserFunc = ({ email, phone, lastName, firstName, id }) => {
    const newUser = { email, phone, lastName, firstName, id };
    this.setState({ users: [newUser, ...this.state.users] });
    this.setState({ searching: [newUser, ...this.state.searching] });

    this.paginateTimeOut();
  };

  paginate = pageNum => {
    this.setState({ currentPage: pageNum });

    this.paginateTimeOut();
  };

  paginateTimeOut = () => {
    setTimeout(() => {
      this.setState({
        indexOfLastPerson: this.state.currentPage * this.state.rowsPerPage
      });
      this.setState({
        indexOfFirstPerson:
          this.state.indexOfLastPerson - this.state.rowsPerPage
      });

      this.setState({
        currentPeople: this.state.users.slice(
          this.state.indexOfFirstPerson,
          this.state.indexOfLastPerson
        )
      });
    }, 0);
  };

  sortAscend = key => {
    let arr;

    if (key === "id") {
      arr = this.state.users.sort(
        (a, b) => parseInt(a[key]) - parseInt(b[key])
      );
    } else {
      arr = this.state.users.sort((a, b) => {
        var nameA = a[key].toUpperCase();
        var nameB = b[key].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({
      users: arr
    });
    this.paginateTimeOut();
  };

  sortDescend = key => {
    let arr;

    if (key === "id") {
      arr = this.state.users.sort(
        (a, b) => parseInt(b[key]) - parseInt(a[key])
      );
    } else {
      arr = this.state.users.sort((a, b) => {
        var nameA = a[key].toUpperCase();
        var nameB = b[key].toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({
      users: arr
    });
    this.paginateTimeOut();
  };

  render() {
    return (
      <div className='container'>
        <h1>Таблица Данных</h1>

        <SelectDataButtons fetchData={this.fetchData} />

        <Search searchData={this.searchData} />

        <AddUserButtons addUserInit={this.addUserInit} />

        <DataTable
          error={this.state.error}
          users={this.state.currentPeople}
          getOneUser={this.getOneUser}
          loading={this.state.loading}
          addNewUser={this.state.addNewUser}
          addNewUserFunc={this.addNewUserFunc}
          sortDescend={this.sortDescend}
          sortAscend={this.sortAscend}
        />

        <Pagination
          totalUsers={this.state.users.length}
          rowsPerPage={this.state.rowsPerPage}
          paginate={this.paginate}
        />

        <OneUser data={this.state.user} />
      </div>
    );
  }
}

export default App;
