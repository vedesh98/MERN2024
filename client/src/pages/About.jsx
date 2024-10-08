import { Analytics } from "../components/Analytics.jsx";
import { NavLink } from "react-router-dom";
import AnimatedText from "../components/AnimatedText.jsx";
export const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center">
      <AnimatedText text={"Learning Ignites Achievement!"} className="mb-12 mt-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
        <section className="pt-16">
          
          <div className="container grid grid-two-cols">
            <div className="flex flex-col justify-start">
              
              <p className="font-medium mb-6">
                At {<NavLink to="/">BGryt</NavLink>}, we empower confident
                investors to navigate the dynamic world of trading. We're not
                just another platform; we're a community of passionate
                individuals united by a shared goal: making informed decisions
                and maximizing returns in the financial markets. Born from a
                conviction that everyone deserves access to powerful trading
                tools and expert guidance, we built a platform that caters to
                every level of experience. Whether you're a seasoned veteran or
                a curious newcomer, we offer:
                </p>
                <p className="font-medium mb-6">
                  A robust and user-friendly trading platform: Experience
                  intuitive navigation, advanced charting tools, real-time
                  market data, and a wide range of tradable assets, all at your
                  fingertips.
                </p>
                <p className="font-medium mb-6">
                  Comprehensive educational resources: Hone your skills with
                  in-depth articles, video tutorials, webinars led by industry
                  professionals, and interactive courses designed to demystify
                  the intricacies of trading.
                </p>
                <p className="font-medium mb-6">
                  A supportive and vibrant community: Connect with fellow
                  traders, share experiences, and learn from each other in our
                  active forums and live chat rooms.
                </p>
                <p className="font-medium mb-6">
                  Dedicated customer support: Our knowledgeable team is always
                  available to answer your questions, address your concerns, and
                  guide you on your trading journey.
                </p>
                <p className="font-medium mb-6">
                  More than just a platform, we're your trusted partner in the
                  pursuit of financial success. We believe in transparency,
                  integrity, and fostering an environment where everyone feels
                  empowered to reach their full potential.
                </p>

                <p className="font-medium mb-6">
                Ready to join us on this exciting journey? Create your free
                account today and discover the world of possibilities that
                awaits you at {<NavLink to="/">BGryt</NavLink>}. We're here to
                support you every step of the way.
              </p>
              <div className="flex items-center self-start mt-12 lg:self-center">
                <a href="/contact">
                  <button className="dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light flex items-center bg-dark text-light p-5 px-10 rounded-lg text-2xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark capitalize">connect now</button>
                </a>
                <a href="/service">
                  <button className="ml-8 p-5 px-10 text-2xl font-semibold capitalize border-dark text-dark underline">learn more now</button>
                </a>
              </div>
            </div>
            {/* hero images */}
            <div className="hero-image c24-7">
              <img
                src="/images/teach.png"
                alt="coding together"
                width="700"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section */}

      <Analytics />
      {/* 3rd section */}
      {/* <section className="selection-hero">
        <div className="container grid grid-two-cols">
         
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
      </section> */}
    </>
  );
};
