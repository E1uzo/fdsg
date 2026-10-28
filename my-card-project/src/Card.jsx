import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = () => {
  const [isInverted, setIsInverted] = useState(false);

  const handleButtonClick = () => {
    setIsInverted(!isInverted);
  };

  const themeNormal = {
    backgroundColor: '#ffffff',
    color: '#212529'
  };

  const themeInverted = {
    backgroundColor: '#212529',
    color: '#ffffff'
  };

  const currentTheme = isInverted ? themeInverted : themeNormal;

  return (
    <div className={styles.card} style={currentTheme}>
      <img 
        className={styles.image} 
        src="https://picsum.photos" 
        alt="Пример изображения" 
      />
      <h2 className={styles.title}>Заголовок карточки</h2>
      <p className={styles.description}>
        Это текст с описанием карточки. При нажатии на кнопку ниже фон и цвет текста поменяются местами благодаря встроенным JS-стилям.
      </p>
      <button className={styles.button} onClick={handleButtonClick}>
        Инвертировать цвета
      </button>
    </div>
  );
};

export default Card;
