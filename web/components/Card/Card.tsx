import React from "react";
import styles from "./styles.module.css";

type CardType = {
  _id: string;
  likes: number;
  dislikes: number;
  description: string;
  title: string;
};

const Card: React.FC<CardType> = ({
  likes,
  dislikes,
  description,
  title,
  _id,
}) => {
  return (
    <div>
      <div key={_id} className={styles.wrapper}>
        <h3>{title}</h3>
        <h6>Likes: {likes}</h6>
        <h6>Dislikes: {dislikes}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
