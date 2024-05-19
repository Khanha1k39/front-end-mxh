// import { useParams } from "react-router-dom";
// export default function ChangePassword() {
//   let { token } = useParams();
//   function changePasswordHandler(e) {
//     e.preventDefault();

//     const password = document.getElementById("password").value;

//     fetch(`http://localhost:8080/reset/${token}`, {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ password }),
//     })
//       .then((result) => {
//         console.log(result);
//         if (!result.ok) {
//           alert("error");
//         }
//         return result.json();
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => console.log(err));
//   }

//   console.log(token);
//   return (
//     <form onSubmit={changePasswordHandler}>
//       <label htmlFor="password">Password</label>
//       <input type="password" id="password" name="password"></input>
//       <button type="submit"></button>
//     </form>
//   );
// }

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import style from "./LoginTest.module.css";
import { Link } from "react-router-dom";
function changePasswordHandler() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(6, "At least 6 characters!"),
    // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(6, "At least 6 characters!")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });
  console.log(Formik);
  return (
    <div
      className={` d-flex justify-content-center  align-items-start mt-5 ${style.container}`}
    >
      <Formik
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          handleBlur,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={`${style.form} p-3 ${style.resetPasswordForm} `}
          >
            <div className={`px-5 py-3`}>
              <h5> Change password</h5>
            </div>
            <Row className="mb-3 mx-0 w-100 p-0">
              <Form.Group
                as={Col}
                controlId="validationFormik101"
                className="position-relative p-0"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.password && touched.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3  mx-0 w-100 p-0">
              <Form.Group
                as={Col}
                controlId="validationFormik103"
                className="position-relative px-0"
              >
                <Form.Control
                  type="confirmPassword"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.confirmPassword && touched.confirmPassword}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <p className="fs-6">Make sure it's at least 6 characters</p>

            <Button
              className={` ${style.btnsubmit} w-100  `}
              onClick={() => {
                console.log(errors);
              }}
              type="submit"
            >
              Change password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default changePasswordHandler;
