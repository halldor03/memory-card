import React from "react";

export default function Card(props) {
  const { cards } = props;

  const playSoundEffect = (mob) => {
    const sound = new Audio(mob.soundSrc);
    sound.play();
  };

  return (
    <>
      {cards.map((mob) => {
        return (
          <div
            className="cardElement"
            key={mob.id}
            onClick={() => playSoundEffect(mob)}
          >
            <img className="cardPhoto" src={mob.imgSrc} alt={mob.name} />
            <div className="cardTitle">{mob.name}</div>
          </div>
        );
      })}
    </>
  );
}
