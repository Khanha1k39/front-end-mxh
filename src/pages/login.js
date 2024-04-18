import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function loginHandler(e) {
    e.preventDefault();
    console.log(e);
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:8080/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((result) => {
        console.log(result);
        if (!result.ok) {
          alert("error");
        }
        return result.json();
      })
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={loginHandler}>
      <div className="form-outline mb-4">
        <input type="email" id="email" className="form-control" />
        <label className="form-label" htmlFor="email">
          Email address
        </label>
      </div>

      {/* // <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="password" className="form-control" />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>

      {/* // <!-- 2 column grid layout for inline styling --> */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* // <!-- Checkbox --> */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label className="form-check-label" htmlFor="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          {/* // <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* // <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      {/* // <!-- Register buttons --> */}
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
}
