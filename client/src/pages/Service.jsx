import { Video } from "./video";
import { Error } from "./error.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export const Service = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = location.state || "";
  // const { token } = ;
  // if (!token) {
  //   return <Error />;
  // } else {
  return <Video />;
  // }
};
