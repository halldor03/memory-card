import React, { useState } from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <header>
        <div className="mainTitle">Minecraft memory game</div>
        <div className="scoreBoard">
          <div className="currentScore">Current score: 0</div>
          <div className="bestScore">Best score: 0</div>
        </div>
      </header>
      <div className="gameInfo">
        Get points by clicking on an image but don't click on any more than
        once! Score 12 to win!
      </div>
      <div className="cardContainer">
        <Card />
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
}
