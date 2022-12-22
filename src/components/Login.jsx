import React, { useState } from "react";

const DIV_MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

export const Login = (props) => {
  const [values, setValues] = useState({
    password: null,
    nombre: null,
  });
  const [isLogin, setIsLogin] = useState(false);
  const [hasRegis, setHasRegis] = useState(false);
  const [isError, setIsError] = useState(false);

  const getEmail = JSON.parse(localStorage.getItem("account"));
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getEmail) {
      if (
        values.nombre === getEmail.email &&
        values.password === getEmail.pass
      ) {
        setIsLogin(true);
      } else {
        setIsError(true)
        setHasRegis(false);
        setValues(e.target.reset());
      }
    } else {
      console.log("register");
      setHasRegis(true);
      setValues(e.target.reset());
    }
    setTimeout(() => {
      setHasRegis(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    /*const{name,value} = e.target*/

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-form-container">
      {isLogin ? (
        <div className="home-container">
          <h1>Hi,{getEmail.name}</h1>
          <label> you are logged in ¡</label>
        </div>
      ) : (
        <>

        {isError ? (
          <div style={DIV_MODAL_STYLE}>
            <div>
              <button onClick={ () => setIsError(false)}>Invalid e-mail or password <br/><br/>X</button>
            </div>
          </div>
       ):(
          <div>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                /*value={values.name}*/
                onChange={handleInputChange}
                type="email"
                placeholder="@ Your email"
                name="nombre"
                autoComplete="true"
                required
                autoFocus
              />
              <label htmlFor="password">Password</label>
              <input
                /*value={values.password}*/
                onChange={handleInputChange}
                type="password"
                placeholder="Your pasword ****"
                name="password"
                autoComplete="true"
                required
              />
              {hasRegis && <label className="label-alert">Register Now</label>}
              <button type="submit">Log In</button>
            </form>
            <button
              className="link-btn"
              onClick={() => props.onFormSwitch("register")}
            >
              Don't have an account? Register Here
            </button>
          </div>
       )}
        </>
      )}
    </div>
  );
};
