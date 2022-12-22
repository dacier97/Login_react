import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [isRegist, setIsRegist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let ac = { email, pass, name };
    console.log(ac);
    let account = JSON.stringify(ac);
    localStorage.setItem("account", account);
    setIsRegist(true)
  };
  return (
    <div className="auth-form-container">
      {isRegist ? (
        <div className="home-container">
          <h1>Congratulations !,{name}</h1>
          <label>Your registration is complete</label>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="Full name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              autoComplete="true"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@.gmail.com"
              name="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              autoComplete="true"
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="*****"
              name="password"
              required
            />
            <button type="submit">Register</button>
          </form>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login Here
          </button>
        </div>
      )}
    </div>
  );
};
