import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";

const URL = `http://localhost:5000/api/auth/register`;

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(e.target);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  // handling the form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const body = JSON.stringify(user);
      console.log(body);
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      if (response.ok) {
        navigate("/login", {
          state: {
            email: user.email,
          },
        });
      }
      console.log(response);
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
              {/* <div className="resitration-image">
                <img
                  src="/images/Bear-and-Bull.jpg"
                  alt="testing image"
                  width="600"
                  height="500"
                />
              </div> */}
              <div className="registration-form form">
                <h1 className="main-heading mb-3">registration Form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
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
                    Register Now
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
