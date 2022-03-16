import React, { useState,  useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(userName);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  //Auth is pending
  const handleLogin = (event) => {
    event.preventDefault();
    let submitData = {
      userName: userName,
      password: password,
    };
    history.push("/appointment");
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      console.log("items-loggedin user", items);
     
    }
  });
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            value={userName}
            className="form-control"
            onChange={handleUsername}
            placeholder="Enter User Name"
          />{" "}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={handlePassword}
            placeholder="Enter Password"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-success">Login</button>
          <div>
            <span>New User?</span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
