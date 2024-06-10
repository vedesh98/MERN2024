import { Video } from "./VideoList";
import { Error } from "./error.jsx";
import { useLocation, useNavigate } from "react-router-dom";
const server_port = 5000;

const URL = `http://localhost:${server_port}/api/service/videos`;

export const getVid = async () => {
  let videos = [];
  try {
    console.log("Start");
    videos = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    });

    console.log("log:", videos);

    return (
      <>
        <ul>
          {videos.map((video) => (
            <li key={video.title}>
              <a>{video.description}</a>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (err) {
    console.log("register:", err);
  }
};

export const Service = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // = [
  //   {
  //     title: "12",
  //     description: "ist",
  //     video_file_path: "sdsd",
  //     thumbnail_URL: "sdsd",
  //     subscription: "asas",
  //     requirements: "asas",
  //   },
  //   {
  //     title: "21",
  //     description: "i7st",
  //     video_file_path: "s7dsd",
  //     thumbnail_URL: "s7dsd",
  //     subscription: "a7sas",
  //     requirements: "as7as",
  //   },
  // ];
  // const { token } = location.state || "";
  // const { token } = ;
  // if (!token) {
  //   return <Error />;
  // } else {

  // const [videos, setVideo] = useState( { videol} );
  let videos = [];

  console.log("Start");
  videos = fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
  });

  console.log("log:", videos);
  return (
    <>
      <ul>
        {videos.map((video) => (
          <li key={video.title}>
            <a>{video.description}</a>
          </li>
        ))}
      </ul>
    </>
  );
  // }
};
