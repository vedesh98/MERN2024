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
              <h1>Welcome to BGryt</h1>
              <p>
                Are you ready to become a part of the exciting world of trading?
                Whether you're a seasoned investor or just starting your
                journey, BGryt is your one-stop shop for everything you need to
                succeed. Here, you'll find a wealth of resources, from in-depth
                market analysis and expert insights to powerful trading tools
                and educational materials. Our mission is to empower you with
                the knowledge and confidence to make informed trading decisions
                and achieve your financial goals.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more now</button>
                </a>
              </div>
            </div>
            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/Bear-and-Bull.jpg"
                alt="coding together"
                width="700"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>

            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Devlopers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="selection-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
            <img
              src="/images/bull.png"
              alt="coding together"
              width="500"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towords a more afficient and secure
              trading infrastructure? Contact us today for free cunstation and
              let's discuss how Bgryt can help you
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
