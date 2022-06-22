import React, { Component } from "react";
import "./contact.css";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", sub: "", comment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const state_name = event.target.name;
    this.setState({ [state_name]: event.target.value });
  }
  handleSubmit(event) {
    alert("Thank you " + this.state.name);
    event.preventDefault();
    event.target.reset();
  }
  render() {
    return (
      <div className="container" id="contactForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Name:</label>
            <input
              name="name"
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Adress:</label>
            <input
              name="email"
              className="form-control"
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label> Subject:</label>
            <input
              name="sub"
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label> Message:</label>
            <textarea
              name="comment"
              rows={5}
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <input
            style={{ marginTop: "10px", float: "left" }}
            type="submit"
            value="Send"
            className="submitBtn"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
