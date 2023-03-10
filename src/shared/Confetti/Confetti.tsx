import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './confetti.css';

export function Confetti() {
  const ref = useRef<HTMLDivElement>(null)
  const node = document.querySelector('#confetti');
  if (!node) return null
  return (ReactDOM.createPortal((
    <div className={styles.confetti}>
      <h2>Я КОНФЕТТИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
        <svg className={styles.svg} width="600" height="90" viewBox="0 0 600 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.rect} x="42" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="84" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="126" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="168" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="210" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="252" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="294" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="336" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="378" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="420" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="462" y="0" width="6" height="10"/>
          <rect className={styles.rect} x="504" y="0" width="5" height="13"/>
          <rect className={styles.rect} x="546" y="0" width="6" height="10"/> 
        </svg>
    </div>
  ), node)
  );
}
