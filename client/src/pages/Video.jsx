import { useState } from "react";

export const Video = () => {
  // const [video, setVideo] = useState({});

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div>
                
              </div>
              <div>
                <div className="ratio ratio-16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/bGzanfKVFeU?si=XKcOCMMT4crt-FkD"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
