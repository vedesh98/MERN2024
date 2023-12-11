import "../index.css";

export const Home = () => {




  return (
    <>
      <main>
        <section className="selection-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>bgryt</p>
              <h1>Welcome</h1>
              <p>bgryt</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn">learn more now</button>
                </a>
              </div>
              {/* hero images */}
              <div className="hero-image">
                <img
                  src="/images/channels4_profile.jpg"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};


