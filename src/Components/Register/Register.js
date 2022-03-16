import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    ssnNumber: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleAgeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      age: event.target.value,
    }));
  };

  const handleMobileChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      mobile: event.target.value,
    }));
  };

  const handleSSNChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      ssnNumber: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
    setShowSuccess(true);
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    localStorage.setItem("user", JSON.stringify(values));
    //localStorage.setItem("password", JSON.stringify(values.password));
  }, [values]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1> Register </h1>{" "}
        <div className="form-group">
          <label> First Name </label>{" "}
          <input
            id="first-name"
            className="form-control"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
          />{" "}
          {submitted && !values.firstName && (
            <span id="first-name-error"> Please enter a first name </span>
          )}{" "}
        </div>{" "}
        <div className="form-group">
          <label> Last Name </label>{" "}
          <input
            id="last-name"
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Age</label>{" "}
          <input
            id="last-name"
            className="form-control"
            type="number"
            placeholder="Age"
            name="age"
            value={values.age}
            onChange={handleAgeInputChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Mobile</label>{" "}
          <input
            id="last-name"
            className="form-control"
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={values.mobile}
            onChange={handleMobileChange}
          />{" "}
          {submitted && !values.lastName && (
            <span id="first-name-error"> Please enter last name </span>
          )}{" "}
        </div>{" "}
        <div className="form-group">
          <label> SSN </label>{" "}
          <input
            id="ssn"
            className="form-control"
            type="text"
            placeholder="SSN Number"
            name="ssnNumber"
            value={values.ssnNumber}
            onChange={handleSSNChange}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label> Email </label>{" "}
          <input
            id="email"
            className="form-control"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />{" "}
          {submitted && !values.email && (
            <span id="first-name-error"> Please enter email </span>
          )}{" "}
        </div>{" "}
        <div className="form-group">
          <label> Password </label>{" "}
          <input
            id="password"
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handlePasswordChange}
          />{" "}
          {submitted && !values.email && (
            <span id="first-name-error"> Please enter passowrd</span>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          <button className="btn btn-primary"> Submit </button>{" "}
        </div>{" "}
      </form>{" "}
      {showSuccess && (
        <div className="success-message">
          {" "}
          Success!Thank you for registering <Link to="/">Login</Link>
        </div>
      )}{" "}
    </div>
  );
};

export default Register;
