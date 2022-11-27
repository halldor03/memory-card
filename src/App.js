import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Soundtrack from "./components/Soundtrack";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";

export default function App() {
  const [cards] = useState([
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
  const [currentScoreArray, setcurrentScoreArray] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  //FOR RANDOMIZING CARD ORDER EACH TIME
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  useEffect(() => {
    const cardsElements = document.querySelectorAll(".cardElement");
    const addCardToCurrentScoreArray = (e) => {
      const mobClicked = e.composedPath()[0].id;
      const cardClicked = e.composedPath()[0];
      if (!currentScoreArray.includes(mobClicked)) {
        cardClicked.classList.add("cardElementValid");
        setTimeout(() => {
          cardClicked.classList.remove("cardElementValid");
        }, 300);
        setcurrentScoreArray([...currentScoreArray, mobClicked]);
      } else {
        playHurtSoundEffect(e);
        cardClicked.classList.add("cardElementInvalid");
        setTimeout(() => {
          cardClicked.classList.remove("cardElementInvalid");
        }, 300);
        setBestScore(Math.max(currentScoreArray.length, bestScore));
        setcurrentScoreArray([]);
      }
    };

    //WINNING BEHAVIOUR
    if (currentScoreArray.length === cards.length) {
      cardsElements.forEach((card) => {
        card.classList.add("cardElementInactive");
      });
      const winSound = new Audio("/sounds/LevelUpSound.mp3");
      winSound.volume = 0.6;
      winSound.play();
    }

    cardsElements.forEach((card) => {
      card.addEventListener("click", addCardToCurrentScoreArray);
    });

    return () => {
      cardsElements.forEach((card) => {
        card.removeEventListener("click", addCardToCurrentScoreArray);
      });
    };
  }, [currentScoreArray]);

  const playHurtSoundEffect = (e) => {
    const hurtSound = new Audio("/sounds/HurtSound.mp3");
    hurtSound.volume = 0.6;
    hurtSound.play();
    e.stopPropagation();
  };

  return (
    <>
      <header>
        <div className="mainTitle">Minecraft memory game</div>
        <Scoreboard
          currentScoreArray={currentScoreArray}
          bestScore={bestScore}
        />
      </header>
      <div className="gameInfoContainer">
        <div className="gameInfo">
          {currentScoreArray.length === cards.length
            ? "You won! Refresh the page to play again!"
            : `Get points by clicking on an image but don't click on any more than once! Score all 12 to win!`}
        </div>
        <Soundtrack />
      </div>
      <div className="cardContainer">
        <Card cards={cards} />
      </div>
    </>
  );
}
