import { useState } from "react";
import AnimatedText from "../components/AnimatedText";

let s1 = `https://bgryt01.onrender.com/api/form/contact`;
export const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = JSON.stringify(user);
      console.log(body);
      const response = await fetch(s1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      console.log(response);
    } catch (error) {
      console.log("register:" + error);
    }
  };
  return (
    <>
      <section className="py-16 bg-gray-100">
      <AnimatedText text={"Reach Out Anytime, We're Here to Help!"} className="mb-2 mt-1 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images/24-7.jpg"
              alt="testing image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 ml-16">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-2xl font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="45"
                  rows="6"
                  value={user.message}
                  onChange={handleInput}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 text-2xl rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <section className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15078.66431340277!2d72.86374948809855!3d19.12229958201693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA3JzM2LjQiTiA3MsKwNTEnMzAuMyJF!5e0!3m2!1sen!2sin!4v1702478415599!5m2!1sen!2sin"
            width="80%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg ml-52"
          ></iframe>
        </section>
      </section>
    </>
  );
};
