import React from "react";
import Pig from "../img/Pig.webp";
import Sheep from "../img/Sheep.webp";
import Chicken from "../img/Chicken.webp";
import Cow from "../img/Cow.webp";
import Creeper from "../img/Creeper.webp";
import Enderman from "../img/Enderman.webp";
import Ghast from "../img/Ghast.webp";
import Skeleton from "../img/Skeleton.webp";
import Spider from "../img/Spider.webp";
import Villager from "../img/Villager.webp";
import Witch from "../img/Witch.webp";
import Zombie from "../img/Zombie.webp";

export default function Card(props) {
  return (
    <>
      <div className="cardElement">
        <img className="cardPhoto" src={Pig} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Sheep} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Chicken} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Cow} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Creeper} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Enderman} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Ghast} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Skeleton} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Spider} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Villager} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Witch} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>

      <div className="cardElement">
        <img className="cardPhoto" src={Zombie} alt="Pig" />
        <div className="cardTitle">Pig</div>
      </div>
    </>
  );
}
