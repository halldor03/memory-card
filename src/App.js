import React, { useState } from "react";
import Card from "./components/Card";
import uniqid from "uniqid";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    {
      name: "Chicken",
      imgSrc: "/img/ChickenImg.webp",
      soundSrc: "/sounds/ChickenSound.oga",
      id: uniqid(),
    },
    {
      name: "Pig",
      imgSrc: "/img/PigImg.webp",
      soundSrc: "/sounds/PigSound.ogg",
      id: uniqid(),
    },
    {
      name: "Cow",
      imgSrc: "/img/CowImg.webp",
      soundSrc: "/sounds/CowSound.ogg",
      id: uniqid(),
    },
    {
      name: "Skeleton",
      imgSrc: "/img/SkeletonImg.webp",
      soundSrc: "/sounds/SkeletonSound.ogg",
      id: uniqid(),
    },
    {
      name: "Creeper",
      imgSrc: "/img/CreeperImg.webp",
      soundSrc: "/sounds/CreeperSound.ogg",
      id: uniqid(),
    },
    {
      name: "Ghast",
      imgSrc: "/img/GhastImg.webp",
      soundSrc: "/sounds/GhastSound.ogg",
      id: uniqid(),
    },
    {
      name: "Zombie",
      imgSrc: "/img/ZombieImg.webp",
      soundSrc: "/sounds/ZombieSound.ogg",
      id: uniqid(),
    },
    {
      name: "Villager",
      imgSrc: "/img/VillagerImg.webp",
      soundSrc: "/sounds/VillagerSound.ogg",
      id: uniqid(),
    },
    {
      name: "Spider",
      imgSrc: "/img/SpiderImg.webp",
      soundSrc: "/sounds/SpiderSound.oga",
      id: uniqid(),
    },
    {
      name: "Sheep",
      imgSrc: "/img/SheepImg.webp",
      soundSrc: "/sounds/SheepSound.oga",
      id: uniqid(),
    },
    {
      name: "Enderman",
      imgSrc: "/img/EndermanImg.webp",
      soundSrc: "/sounds/EndermanSound.ogg",
      id: uniqid(),
    },
    {
      name: "Witch",
      imgSrc: "/img/WitchImg.webp",
      soundSrc: "/sounds/WitchSound.ogg",
      id: uniqid(),
    },
  ]);
  const [soundtrack, setSoundtrack] = useState("Play soundtrack");
  const playSoundtrack = (e) => {
    setSoundtrack("Stop Soundtrack");
    console.log("hi");
    const sound = new Audio("/sounds/MinecraftSoundtrack.mp3");
    sound.volume = 0.8;
    sound.play();
  };
  // console.log(cards);
  return (
    <>
      <header>
        <div className="mainTitle">Minecraft memory game</div>
        <div className="scoreBoard">
          <div className="currentScore">Current score: {currentScore}</div>
          <div className="bestScore">Best score: {bestScore}</div>
        </div>
      </header>
      <div className="gameInfoContainer">
        <div className="gameInfo">
          Get points by clicking on an image but don't click on any more than
          once! Score all 12 to win!
        </div>
        <button className="soundtrackButton" onClick={(e) => playSoundtrack()}>
          {soundtrack}
        </button>
      </div>
      <div className="cardContainer">
        <Card cards={cards} />
      </div>
    </>
  );
}
