import React, { useEffect } from "react";

function GameWin({ data }) {
  data(false);

  useEffect(() => {
    const audio = new Audio("victory.mp3");

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Audio playback started successfully
        })
        .catch((error) => {
          // Autoplay was prevented, show UI to let user start playback
          console.log("Autoplay prevented:", error);
        });
    }

    return () => {
      // Clean up audio when component unmounts
      audio.pause();
      audio.src = ""; // Release memory
    };
  }, []);

  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/309370/screenshots/11352811/media/f2fd547760af814bcf10db04a90c6f59.gif"
        alt="backgorundgif"
        className="w-100 rounded"
      />
    </div>
  );
}

export default GameWin;
