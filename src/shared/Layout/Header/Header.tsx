import React from 'react';
import { useAppSelector } from '../../../hook';
import { getSuitComponent } from '../../Content/ListGenerate';
import styles from './header.css';

export function Header() {
  const data = useAppSelector(state => state.user)
  return (
    <header className={styles.header}>
       {data.suit!=='' && 
       <div className={styles.headerNested}>
        <div className={styles.gamer}>Игрок: {data.name}</div>
        <div className={styles.gameCount}>Кол-во отыгранных игр: {data.count}</div>
        <div className={styles.gamerWin}>Выигрышей игрока: {data.winner.human}</div>
        <div className={styles.headerWin}>Выигрышей компьютера: {data.winner.mashine}</div>
        <div className={styles.suit}>Козырь в игре: {data.suit!=="" ? getSuitComponent(data.suit) : ''}</div>
       </div>}
    </header>
  );
}
