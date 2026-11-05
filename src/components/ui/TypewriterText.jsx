import React, { useState, useEffect } from 'react';

export const TypewriterText = ({
  words = ['agência das agências', 'referência em Google Ads', 'sua equipe de ex-Googlers'],
  speed = 85,
  deleteSpeed = 40,
  pause = 2200,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Barra piscando rigorosamente entre opacidade 0 e 1 (intervalo de 530ms)
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting && currentText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, speed);
    } else if (!isDeleting && currentText.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      <span>{currentText}</span>
      <span
        className="inline-block ml-1 font-light text-white select-none transition-opacity duration-75"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </span>
  );
};
