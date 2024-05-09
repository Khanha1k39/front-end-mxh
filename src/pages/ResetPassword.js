// export default function ResetPassword() {
//   function resetHandler() {
//     fetch("http://localhost:8080/resetpassword", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email: document.getElementById("email").value }),
//     });
//   }
//   return (
//     <form onSubmit={resetHandler}>
//       <label htmlFor="email">Email</label>
//       <input type="text" id="email" name="email"></input>
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
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
function ResetPassword() {
  const [sendPassword, setSendPassword] = useState(false);
  const { Formik } = formik;
  const navigate = useNavigate();
  const returnLoginHandler = () => {
    navigate("/login");
  };
  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
  });
  console.log(Formik);
  return (
    <div
      className={` d-flex justify-content-center  align-items-start mt-5 ${style.container}`}
    >
      {!sendPassword && (
        <Formik
          validationSchema={schema}
          onSubmit={(values) => console.log(values)}
          initialValues={{
            email: "",
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
              className={`${style.form} ${style.resetPasswordForm}  p-3`}
            >
              <div className={` px-4 py-3 ${style.mAuto}`}>
                <h5> Reset your password</h5>
              </div>
              <span>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </span>
              <Row className="mb-3 mx-0 p-0 w-100">
                <Form.Group
                  controlId="validationFormik101"
                  className="position-relative px-0"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.email && touched.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button
                className={` ${style.btnsubmit} w-100  `}
                ssaaaa
                type="submit"
              >
                Send password reset email
              </Button>
            </Form>
          )}
        </Formik>
      )}
      {sendPassword && (
        <div className={` ${style.returnLoginBox}  gap-2 ${style.form}  p-3 `}>
          <div className={` px-4 py-3 ${style.mAuto}`}>
            <h5 className="d-flex align-items-center justify-content-center">
              {" "}
              Reset your password
            </h5>
          </div>
          <span className="d-flex align-items-center justify-content-center lh-sm">
            Check your email for a link to reset your password. If it doesn’t
            appear within a few minutes, check your spam folder.
          </span>
          <div
            className={` w-100 ${style.btnReturnLogin}`}
            onClick={returnLoginHandler}
          >
            <Link to={"/login"} className="bold p-1">
              Return to Log in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
