import { Analytics } from "../components/Analytics";
import AnimatedText from "../components/AnimatedText";
// import "../index.css";

export const Home = () => {
  return (
    <>
      <main className="mt-8 md:mt-5 w-full min-h-screen">
        <section className="pt-0 md:pt-5 sm:pt-8">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Text Section */}
            <div className="mt-10 md:col-span-8 md:order-1 col-span-3 flex items-start flex-col justify-start xl:col-span-4 p-4 md:p-8">
              <div className="w-full flex flex-col items-center lg:w-full">
                <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center">
                  <AnimatedText
                    text="Start Your Trading Journey: Dive In and Explore!"
                    className="xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl !text-6xl !text-left font-bold text-dark"
                  />
                </div>
                <p className="my-4 text-lg md:text-xl lg:text-2xl font-medium text-center text-gray-700">
                  Ready to join the exciting world of trading? Whether you're a
                  pro or a beginner, BGryt has everything you need. Explore
                  market analysis, expert insights, powerful tools, and
                  educational materials. Our mission: to empower you with
                  knowledge and confidence for informed trading and financial
                  success.
                </p>
              </div>

              <div className="flex items-center self-start mt-6 lg:self-center">
                <a href="/contact">
                  <button className="dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base">
                    Connect Now
                  </button>
                </a>
                <a
                  href="/service"
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Learn More Now
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:col-span-8 md:order-2 xl:col-span-4 col-span-3 flex justify-center items-center p-8">
              <img
                className="w-full h-auto"
                src="/images/stock.png"
                alt="Stock Trading"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <Analytics />

      {/* 3rd Section */}
      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          {/* Hero Image */}
          <div className="w-full md:w-[40%] lg:w-[30%] mb-8 md:mb-0">
            <img
              src="/images/bull.png"
              alt="Bull Market"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="md:w-[60%] lg:w-[70%] flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              We are here to help you
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Get Started Today
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
              Ready to take the first step towards a more efficient and secure
              trading infrastructure? Contact us today for a free consultation
              and let's discuss how BGryt can help you.
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <a
                href="/contact"
                className="bg-dark text-light border-2 border-dark rounded-lg py-3 px-6 text-lg sm:text-xl font-semibold hover:bg-light hover:text-dark transition mb-4 sm:mb-0 sm:mr-4"
              >
                Connect Now
              </a>
              <a
                href="/service"
                className="bg-light text-dark underline text-lg sm:text-xl"
              >
                Learn More Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
