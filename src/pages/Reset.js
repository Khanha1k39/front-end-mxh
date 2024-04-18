import { useParams } from "react-router-dom";
export default function ChangePassword() {
  let { token } = useParams();
  function changePasswordHandler(e) {
    e.preventDefault();

    const password = document.getElementById("password").value;

    fetch(`http://localhost:8080/reset/${token}`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((result) => {
        console.log(result);
        if (!result.ok) {
          alert("error");
        }
        return result.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  console.log(token);
  return (
    <form onSubmit={changePasswordHandler}>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password"></input>
      <button type="submit"></button>
    </form>
  );
}
