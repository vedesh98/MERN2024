export const Login = () => {
  return (
    <>
      <selction>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/channels4_profile.jpg"
                  alt="testing image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="login-form">
                <h1 className="main-deading mb-3">login form</h1>
                <form action="">
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="eamil"
                      id="email"
                      required
                      autoComplete="off"
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
      </selction>
    </>
  );
};
