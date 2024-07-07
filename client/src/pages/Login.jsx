import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const server_port = 5000;

// const URL = `http://localhost:${server_port}/api/auth/login`;
const URL = "https://bgryt01.onrender.com/api/auth/register";

export const Login = (query) => {
  const navigate = useNavigate();
  const storetokenInLS = useAuth();
  const location = useLocation();
  const { email } = location.state || "";

  console.log("state", location.state);
  const [user, setUser] = useState({
    email: email,
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const body = JSON.stringify(user);
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (response.ok) {
        alert("Login Successful");
        const response_data = await response.json();
        // storetokenInLS(response_data);
        console.log(response_data.token);
        // console.log("token", response_data);

        // navigate("/", {
        //   state: {
        //     token: response.token,
        //     email: user.email,
        //   },
        // });
      } else {
        alert("Invalid creadentials");
      }
    } catch (error) {
      console.log("register:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container flex">
              {/* grid-two-cols"> */}
              {/* <div className="resitration-image">
                <img
                  src="/images/Bear-and-Bull.jpg"
                  alt="testing image"
                  width="500"
                  height="500"
                />
              </div> */}
              <div className="registration-form form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
