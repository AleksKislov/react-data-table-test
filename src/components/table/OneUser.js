import React, { Component } from "react";
import PropTypes from "prop-types";

export class OneUser extends Component {
  render() {
    const {
      description,
      firstName,
      lastName,
      address = {
        streetAddress: "unknown",
        state: "unknown",
        city: "unknown",
        zip: "unknown"
      }
    } = this.props.data;

    if (firstName !== undefined) {
      return (
        <div className='card border-primary mb-3'>
          <div className='card-body'>
            <h4 className='card-title'>
              Выбран пользователь{" "}
              <b>
                {firstName} {lastName}
              </b>
            </h4>
            <p>
              Описание: <b>{description}</b>
            </p>
            <p>
              Адрес проживания: <b>{address.streetAddress}</b>
            </p>
            <p>
              Город: <b>{address.city}</b>
            </p>
            <p>
              Провинция/штат: <b>{address.state}</b>
            </p>
            <p>
              Индекс: <b>{address.zip}</b>
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// prop types
//     const { description, firstName, lastName, address } = this.props.data;

OneUser.propTypes = {
  description: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.object
};

export default OneUser;
