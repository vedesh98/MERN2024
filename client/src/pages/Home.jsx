import "../index.css";

export const Home = () => {
  return (
    <>
      <main>
        <section className="selection-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Ready to embark on your trading adventure? Dive in and explore
                the possibilities!
              </p>
              <h1>Welcome</h1>
              <p>
                Are you ready to become a part of the exciting world of trading?
                Whether you're a seasoned investor or just starting your
                journey, [Your Website Name] is your one-stop shop for
                everything you need to succeed. Here, you'll find a wealth of
                resources, from in-depth market analysis and expert insights to
                powerful trading tools and educational materials. Our mission is
                to empower you with the knowledge and confidence to make
                informed trading decisions and achieve your financial goals.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn">learn more now</button>
                </a>
              </div>
            </div>
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/Bear-and-Bull.jpg"
                alt="coding together"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
