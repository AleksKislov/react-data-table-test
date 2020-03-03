import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddUserButtons extends Component {
  onClick = () => {
    this.props.addUserInit();
  };

  render() {
    return (
      <div className='row'>
        <div className='col-6'>
          <button
            type='button'
            className='btn btn-secondary btn-block'
            style={buttonStyle}
            onClick={this.onClick}
          >
            Добавить
          </button>
        </div>
        <div className='col-6'></div>
      </div>
    );
  }
}

const buttonStyle = {
  marginBottom: "1rem"
};

AddUserButtons.propTypes = {
  addUserInit: PropTypes.func.isRequired
};

export default AddUserButtons;
