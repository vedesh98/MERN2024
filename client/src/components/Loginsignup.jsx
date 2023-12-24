import { useState } from "react";
// import "./Loginsignup.css";
import { SignIn } from "./Login";
import { SignUp } from "./Signup";

export const Newloginsingup = () => {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInput = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const changeStep = (direction) => {
  //   let index = 0;
  //   const active = document.querySelector("form .step.active");
  //   index = steps.indexOf(active);
  //   steps[index].classList.remove("active");

  //   if (direction === "next") {
  //     index++;
  //   } else if (direction === "previous") {
  //     index--;
  //   }

  //   steps[index].classList.add("active");
  //   console.log(index);
  // };

  // // handling the form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  // };

  return (
    // <>
    //   <h1>Hellow</h1>
    // </>
    <div className="cont">
      <SignIn />
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already has an account, just sign in.</h3>
          </div>
          <div className="img__btn">
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};
