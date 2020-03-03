import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchData(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            className='form-control'
            type='text'
            name='text'
            placeholder='Введите имя...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            style={buttonStyle}
            type='submit'
            value='Найти'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "1rem 0"
};

Search.propTypes = {
  searchData: PropTypes.func.isRequired
};

export default Search;
