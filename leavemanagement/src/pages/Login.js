import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(function () {
    const isLoggedIn = localStorage.getItem("employeeId");
    // if (isLoggedIn) navigate("/");
  });

  function handleUsernameChange(event) {
    let value = event.target.value;
    setUsername(value);
  }

  function handlePasswordChange(event) {
    let value = event.target.value;
    setPassword(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleFormReset() {
    setUsername("");
    setPassword("");
  }

  return (
    <div
      className="add-employee d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#B5C0D0" }}
    >
      <div
        className="login-form-container rounded p-4 shadow bg-color"
        style={{
          width: "25rem",
          backgroundColor: "#B4B4B8",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {message && (
          <span className="alert alert-danger alert-small mb-3">{message}</span>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="text"
                id="username"
                className="form-control bg-transparent"
                placeholder="Enter your username"
                onChange={handleUsernameChange}
                value={username}
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="password"
                id="password"
                className="form-control bg-transparent"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                value={password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button type="submit" className="btn btn-success me-2">
            Login
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleFormReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
