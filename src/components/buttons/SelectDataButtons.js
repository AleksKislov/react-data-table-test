import React, { Component } from "react";
import PropTypes from "prop-types";

export class SelectDataButtons extends Component {
  onClick = e => {
    if (e.target.id === "smData") {
      this.props.fetchData(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      );
    } else if (e.target.id === "bigData") {
      this.props.fetchData(
        "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      );
    }
  };

  render() {
    return (
      <div>
        Выберите размер данных для заполнения таблицы:
        <button
          style={buttonStyle}
          id='smData'
          type='button'
          className='btn btn-primary'
          onClick={this.onClick}
        >
          Маленький
        </button>
        <button
          style={buttonStyle}
          id='bigData'
          type='button'
          className='btn btn-primary'
          onClick={this.onClick}
        >
          Большой
        </button>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "1rem"
};

SelectDataButtons.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default SelectDataButtons;
