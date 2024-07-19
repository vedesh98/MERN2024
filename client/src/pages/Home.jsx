
import { Analytics } from "../components/Analytics";
import AnimatedText from "../components/AnimatedText";
import "../index.css";





export const Home = () => {
  return (
    <>
      <main className="mt-8 md:mt-16">
        <section className="pt-0 md:pt-16 sm:pt-8">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="mt-10 md:col-span-8 md:order-1 col-span-3 flex items-start flex-col justify-start xl:col-span-4 p-4 md:p-8">
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
                <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center">
                  <AnimatedText text="Start Your Trading Journey: Dive In and Explore!" className="inline-block w-full text-dark font-bold capitalize text-8xl text-center">
                    
                  </AnimatedText>
                </div>
                <p className="my-10 text-2xl font-medium text-center">
                Ready to join the exciting world of trading? Whether you're a
                pro or a beginner, BGryt has everything you need. Explore market
                analysis, expert insights, powerful tools, and educational
                materials. Our mission: to empower you with knowledge and
                confidence for informed trading and financial success.
              </p>
              </div>

              {/* <p className="text-7xl">
          Ready to embark on your trading adventure? Dive in and explore the possibilities!
        </p> */}
              {/* <h1 className="xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl !text-6xl !text-left">
          Welcome to BGryt
        </h1> */}
              
              <div className="flex items-center self-start mt-12 lg:self-center">
                <a href="/contact">
                  <button className="dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light flex items-center bg-dark text-light p-5 px-10 rounded-lg text-2xl font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
                    Connect Now
                  </button>
                </a>
                <a href="/service">
                  <button className="ml-8 p-5 px-10 text-2xl font-semibold capitalize border-dark text-dark underline">
                    Learn More Now
                  </button>
                </a>
              </div>
            </div>
            {/* hero images */}
            <div className="md:col-span-8 md:order-2 xl:col-span-4 col-span-3 flex justify-center items-center p-8">
              <img
                className="h-full w-full object-cover"
                src="/images/stock.png"
                alt="coding together"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}

      <Analytics />

      {/* 3rd section */}
      <section className="py-12 md:py-24">
  <div className="container mx-auto flex flex-row items-center px-4">
    {/* Hero image */}
    <div className="hero-image md:w-1/2">
      <img
        src="/images/bull.png"
        alt="coding together"
        className="w-1/2 md:max-w-none"
      />
    </div>
    {/* Hero content */}
    <div className="w-auto p-4">
      <p className="text-2xl text-gray-600 mb-2">
        We are here to help you
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
        Get Started Today
      </h1>
      <p className="text-3xl text-gray-700 mb-6">
        Ready to take the first step towards a more efficient and secure
        trading infrastructure? Contact us today for a free consultation and
        let's discuss how BGryt can help you.
      </p>
      <div className="flex flex-wrap items-center">
        <a href="/contact">
          <button className=" bg-dark text-light border-2 border-dark rounded-lg py-4 px-7 text-2xl mr-4 mb-2  hover:bg-light hover:text-dark">
            Connect Now
          </button>
        </a>
        <a href="/service">
          <button className="bg-light text-dark underline text-2xl ml-5">
            Learn More Now
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
