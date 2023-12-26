import { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        <div className="container flex">
          <div className="contact-img">
            <img
              src="/images/24-7.jpg"
              alt="testing image"
              width="600"
              height="500"
            />
          </div>
          <div className="contact-form">
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
                <label htmlFor="email">Email ID</label>
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
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="45"
                  rows="06"
                  value={user.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn submit">
                submit
              </button>
            </form>
          </div>
        </div>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15078.66431340277!2d72.86374948809855!3d19.12229958201693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA3JzM2LjQiTiA3MsKwNTEnMzAuMyJF!5e0!3m2!1sen!2sin!4v1702478415599!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
