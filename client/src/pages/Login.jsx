import { useState } from "react";
import Dropdown from "../components/Dropdown";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const Dropown = () => {
  //   return ValueList.map((Name) => `<option value="${Name}">`).join("");
  // };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/Bear-and-Bull.jpg"
                  alt="testing image"
                  width="600"
                  height="600"
                />
              </div>
              <div className="login-form">
                <h1 className="main-deading mb-3">login form</h1>
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
