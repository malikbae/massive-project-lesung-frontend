import React, { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player("youtubeShortsPlayer1", {
          videoId: "22txPi1VIVU",
          height: 315,
          width: "100%",
          playerVars: {
            autoplay: 0,
          },
        });

        new window.YT.Player("youtubeShortsPlayer2", {
          videoId: "2ozM5007GmI",
          height: 315,
          width: "100%",
          playerVars: {
            autoplay: 0,
          },
        });
      };
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-screen-xl bg-primary rounded-lg mb-12">
      <h1 className="font-semibold text-3xl text-center text-white p-6">Simak Cuplikan Keseruan di Layanan Bimbingan Private!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pb-14 pt-0">
        <div className="w-full md:w-4/5 rounded-lg overflow-hidden">
          <div id="youtubeShortsPlayer1"></div>
        </div>
        <div className="w-full md:w-4/5 rounded-lg overflow-hidden">
          <div id="youtubeShortsPlayer2"></div>
        </div>
      </div>
    </div>
  );
};

export default Video;
