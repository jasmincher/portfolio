import React from "react";
import "../sass/Mail.scss";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const isFormValid = ({ errors, ...inputs }) => {
  let valid = true;

  //makes sure form isnt empty
  Object.values(errors).forEach(value => {
    value.length > 0 && (valid = false);
  });

  //makes sure the form is filled out
  Object.values(inputs).forEach(value => {
    value === "" && (valid = false);
  });

  return valid;
};

class Mail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [null, null],
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (isFormValid(this.state)) {
      e.target.reset();
      this.setState({ success: ["Email Sent", true] });
      console.log("Form submission successful!");
    } else {
      this.setState({ success: ["Fill in all fields", false] });
      console.error("Form submission unsuccessful");
      //find errors and style them
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = { ...this.state.errors };
    console.log(errors);

    switch (name) {
      case "name":
        errors.name = value.length < 2 ? "Name is too short" : "";
        break;
      case "email":
        errors.email = emailRegex.test(value) ? "" : "Invalid email";
        break;
      case "message":
        errors.message = value.length < 6 ? "Message must be longer" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value, success: [null, null] });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="form-container">
        <h6>Want to email me?</h6>

        <div
          style={{
            fontSize: "12px",
            color: this.state.success[1] == true ? "green" : "red"
          }}
        >
          {" "}
          {this.state.success[0]}
        </div>

        <form
          action="https://formspree.io/mvogqlpv"
          method="POST"
          onSubmit={this.handleSubmit}
          className="mail-form"
          noValidate
        >
          <label>Name</label>
          <input
            className={errors.name.length > 0 ? "error" : null}
            type="text"
            name="name"
            noValidate
            onChange={this.handleChange}
          />
          {errors.name.length > 0 && (
            <div className="field-status">{errors.name}</div>
          )}

          <label>Email</label>
          <input
            className={errors.email.length > 0 ? "error" : null}
            type="email"
            name="email"
            noValidate
            onChange={this.handleChange}
          />

          {errors.email.length > 0 && (
            <div className="field-status">{errors.email}</div>
          )}

          <label>Message</label>
          <textarea
            className={
              errors.message.length > 0
                ? "error form-textarea"
                : "form-textarea"
            }
            type="textarea"
            name="message"
            noValidate
            onChange={this.handleChange}
          ></textarea>

          {errors.message.length > 0 && (
            <div className="field-status">{errors.message}</div>
          )}

          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Mail;
