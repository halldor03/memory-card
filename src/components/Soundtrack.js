import React, { useState, useEffect } from "react";

export default function Soundtrack() {
  const [soundtrack, setSoundtrack] = useState(false);

  useEffect(() => {
    const sound = new Audio("/sounds/MinecraftSoundtrack.mp3");
    sound.volume = 0.6;
    sound.currentTime = 18.5;
    if (soundtrack) {
      sound.play();
    } else {
      sound.pause();
    }
    return () => {
      sound.pause();
    };
  }, [soundtrack]);

  return (
    <>
      <button
        className="soundtrackButton"
        onClick={() => setSoundtrack(!soundtrack)}
      >
        {soundtrack ? "Stop soundtrack" : "Start soundtrack"}
      </button>
    </>
  );
}
