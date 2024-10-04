import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const server_port = 5000;

// const URL = `http://localhost:${server_port}/api/auth/register`;
const URL = `https://bgryt01.onrender.com/api/auth/register`;

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const storetokenInLS = useAuth();

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
      console.log(body);
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      if (response.ok) {
        // navigate("/login", {
        //   state: {
        //     email: user.email,
        //   },
        // });

        const res_data = await response.json();
        // storetokenInLS(res_data.token);
        console.log(res_data.token);
        localStorage.setItem("token", JSON.stringify(res_data.token));
        // setUser({ username: "", password: "", email: "", phone: "" });
        setUser(user);
        console.log(user);
      }
      console.log(response);
    } catch (error) {
      console.log("register:", error);
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-100">
  <main>
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-1/2 ml-[35rem]">
          <div className="registration-form bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-7xl font-bold text-center mb-8 text-gray-800">Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-4xl font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-4xl font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                />
              </div>
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
              <button type="submit" className="w-full hover:dark:text-light hover:dark:border-light bg-dark text-light rounded-lg text-2xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  py-2 px-4  shadow-sm">
                Register Now
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
