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
      <section className="py-16 bg-gray-100 mb-36">
  <main>
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 ml-[42rem]">
          <div className="registration-form bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Login Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-4xl font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-4xl font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                />
              </div>
              <button type="submit" className="w-full bg-dark hover:dark:text-light hover:dark:border-light text-light rounded-lg text-2xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  py-2 px-4  shadow-sm">
                Login Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</section>

    </>
  );
};
