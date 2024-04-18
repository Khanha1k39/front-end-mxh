export default function ResetPassword() {
  function resetHandler() {
    fetch("http://localhost:8080/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: document.getElementById("email").value }),
    });
  }
  return (
    <form onSubmit={resetHandler}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email"></input>
      <button type="submit"></button>
    </form>
  );
}
