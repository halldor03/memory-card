import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Soundtrack from "./components/Soundtrack";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";

export default function App() {
  const [cards] = useState([
    {
      name: "Chicken",
      imgSrc: "https://halldor03.github.io/memory-card/img/ChickenImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/ChickenSound.oga",
      id: uniqid(),
    },
    {
      name: "Pig",
      imgSrc: "https://halldor03.github.io/memory-card/img/PigImg.webp",
      soundSrc: "https://halldor03.github.io/memory-card/sounds/PigSound.ogg",
      id: uniqid(),
    },
    {
      name: "Cow",
      imgSrc: "https://halldor03.github.io/memory-card/img/CowImg.webp",
      soundSrc: "https://halldor03.github.io/memory-card/sounds/CowSound.ogg",
      id: uniqid(),
    },
    {
      name: "Skeleton",
      imgSrc: "https://halldor03.github.io/memory-card/img/SkeletonImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/SkeletonSound.ogg",
      id: uniqid(),
    },
    {
      name: "Creeper",
      imgSrc: "https://halldor03.github.io/memory-card/img/CreeperImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/CreeperSound.ogg",
      id: uniqid(),
    },
    {
      name: "Ghast",
      imgSrc: "https://halldor03.github.io/memory-card/img/GhastImg.webp",
      soundSrc: "https://halldor03.github.io/memory-card/sounds/GhastSound.ogg",
      id: uniqid(),
    },
    {
      name: "Zombie",
      imgSrc: "https://halldor03.github.io/memory-card/img/ZombieImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/ZombieSound.ogg",
      id: uniqid(),
    },
    {
      name: "Villager",
      imgSrc: "https://halldor03.github.io/memory-card/img/VillagerImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/VillagerSound.ogg",
      id: uniqid(),
    },
    {
      name: "Spider",
      imgSrc: "https://halldor03.github.io/memory-card/img/SpiderImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/SpiderSound.oga",
      id: uniqid(),
    },
    {
      name: "Sheep",
      imgSrc: "https://halldor03.github.io/memory-card/img/SheepImg.webp",
      soundSrc: "https://halldor03.github.io/memory-card/sounds/SheepSound.oga",
      id: uniqid(),
    },
    {
      name: "Enderman",
      imgSrc: "https://halldor03.github.io/memory-card/img/EndermanImg.webp",
      soundSrc:
        "https://halldor03.github.io/memory-card/sounds/EndermanSound.ogg",
      id: uniqid(),
    },
    {
      name: "Witch",
      imgSrc: "https://halldor03.github.io/memory-card/img/WitchImg.webp",
      soundSrc: "https://halldor03.github.io/memory-card/sounds/WitchSound.ogg",
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
      const winSound = new Audio(
        "https://halldor03.github.io/memory-card/sounds/LevelUpSound.mp3"
      );
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
    const hurtSound = new Audio(
      "https://halldor03.github.io/memory-card/sounds/HurtSound.mp3"
    );
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
