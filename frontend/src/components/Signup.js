import React, { useState } from "react";
import Axios from "axios"; // for making http requests
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Login.css";


export default function UserSignUp() {
  const [createAccountUsername, setCreateAccountUsername] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");

  const [createAccountEmail, setCreateAccountEmail] = useState("");

  const createAccount = () => {
    Axios({
      method: "POST",
      data: {
        username: createAccountUsername,
        password: createAccountPassword,
        email: createAccountEmail,
      },
      withCredentials: true,
      url: "http://localhost:5000/createaccount",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
    });
  };
  return (
    <div>
      <div>
        <center>
          <h1
            style={{
              fontSize: "4rem",
              fontFamily: "East Sea Dokdo",
              color: "white",
            }}
          >
            {" "}
            SIGN UP{" "}
          </h1>
        </center>

        <form>
          <Card bg="dark" text="light align-items-center">
            <div className="container">
              <center>
                <ul className="form-container">
                  <li>
                    <h3>CREATE NEW ACCOUNT</h3>
                    <br></br>
                  </li>
                  <li>
                    <div class="container">
                      <label htmlFor="name">
                        <b>Name</b>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Username"
                        name="name"
                        id="name"
                        onChange={(e) => setCreateAccountUsername(e.target.value)}
                      ></input>
                    </div>
                  </li>
                  <li>
                    <div class="container">
                      <label htmlFor="email">
                        <b>Email</b>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={(e) => setCreateAccountEmail(e.target.value)}
                      ></input>
                    </div>
                  </li>
                  <li>
                    <label for="password">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      onChange={(e) => setCreateAccountPassword(e.target.value)}
                    ></input>
                  </li>

                  <li>
                    <button onClick={createAccount}>Submit</button>
                  </li>
                  <li>
                    Already have an account? <Link to="/login">Sign-IN</Link>
                  </li>
                </ul>
              </center>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}
