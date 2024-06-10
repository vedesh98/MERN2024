import { useState } from "react";

export const Video = async () => {
  let videos = [
    {
      title: "12",
      description: "ist",
      video_file_path: "sdsd",
      thumbnail_URL: "sdsd",
      subscription: "asas",
      requirements: "asas",
    },
    {
      title: "21",
      description: "i7st",
      video_file_path: "s7dsd",
      thumbnail_URL: "s7dsd",
      subscription: "a7sas",
      requirements: "as7as",
    },
  ];
  // try {
  //   videos = await fetch(URL, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: {},
  //   });
  // } catch (err) {
  //   console.log("register:", error);
  // }

  // const [videos, setVideo] = useState( { videol} );

  return (
    <>
      <section>
        <main>          
          <ul>
            <li>Creola Katherine Johnson: mathematician</li>
            <li>Mario José Molina-Pasquel Henríquez: chemist</li>
            <li>Mohammad Abdus Salam: physicist</li>
            <li>Percy Lavon Julian: chemist</li>
            <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
          </ul>
        </main>
      </section>
    </>
  );
};
