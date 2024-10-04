import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

export const Navbar1 = () => {
  const isToken = localStorage.getItem("token") ? true : false;
  console.log(localStorage.getItem("token"));
  console.log("Navbar1 component rendered");

  

  const CustomLink = ({ href, title, className = "" }) => {
    const location = useLocation();
    return (
      <Link to={href} className={`${className} relative group`}>
        {title}
        <span
          className={`dark:bg-light h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            location.pathname === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  return (
    <>
      <header className="w-full z-10 px-5 py-8 relative font-normal text-xl flex items-center justify-between text-dark">
        <div className="w-full flex justify-between items-center mt-1">
          <nav className="flex w-full items-center">
            <Link to="/"  className="mr-10 ml-5" >BGryt</Link>
            <div className="flex-grow"></div>
            <CustomLink href="/" title="Home" className="mr-5" />
            <CustomLink href="/about" title="About" className="mx-5" />
            <CustomLink href="/contact" title="Contact" className="mx-5" />
            <CustomLink href="/service" title="Service" className="ml-5 mr-16" />
            {/* <CustomLink href="/register" title="Register" className="mx-5" /> */}
            {/* <CustomLink href="/login" title="Login" className="ml-5 mr-10" /> */}
          </nav>
        </div>
      </header>
    </>
  );
};
