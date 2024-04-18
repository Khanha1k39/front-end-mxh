import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  function signUpHandler(e) {
    e.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pw").value,
        checkPW: document.getElementById("checkPW").value,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        navigate("/login");
      }
    });
    //   function signUpHandler(e) {
    //     e.preventDefault();
    //     console.log(document.getElementById("name").value);
  }
  return (
    <form onSubmit={signUpHandler}>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text"></input>
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" formNoValidate></input>
      <label htmlFor="pw"> Password</label>
      <input name="password" id="pw" type="password"></input>
      <label htmlFor="checkPW"> Confirm Password </label>
      <input name="checkPW" id="checkPW" type="password"></input>
      <button type="submit">Sign up</button>
    </form>
  );
}
