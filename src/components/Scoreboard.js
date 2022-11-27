import React from "react";

export default function Scoreboard({ currentScoreArray, bestScore }) {
  return (
    <>
      <div className="scoreBoard">
        <div className="currentScore">
          Current score: {currentScoreArray.length}
        </div>
        <div className="bestScore">Best score: {bestScore}</div>
      </div>
    </>
  );
}
