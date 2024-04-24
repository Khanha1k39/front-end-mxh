import React from "react";
import { Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Row, FloatingLabel } from "react-bootstrap";
import styles from "./LoginTest.module.css";
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LoginTest = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.container}`}
      >
        <Form
          noValidate
          className={` ${styles.form} p-3 `}
          onSubmit={formik.handleSubmit}
        >
          <Row>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="validationFormik01"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                isValid={formik.touched.firstName && formik.errors.firstName}
              />
              <Form.Control.Feedback>
                {formik.errors.firstName}
              </Form.Control.Feedback>
              {/* {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null} */}
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="validationFormik02"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {/* {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null} */}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="validationFormik02">
            <Form.Label>Email</Form.Label>

            <FloatingLabel controlId="floatingInputGrid" label="Email address">
              <Form.Control
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </FloatingLabel>

            {/* {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null} */}
          </Form.Group>

          {/* <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="username">User name</label>
      <input id="username" type="text" {...formik.getFieldProps("username")} />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null} */}

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDay">
              <Form.Label>Ngày</Form.Label>
              <Form.Select defaultValue={new Date().getDate()}>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className={`btn ${styles.btnsubmit} btn-primary`}
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default LoginTest;
