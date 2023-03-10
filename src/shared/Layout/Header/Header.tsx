import React, { useContext } from 'react';
import { getSuitComponent } from '../../Content/ListGenerate';
import { userContext } from '../../context/userDataContext';
import styles from './header.css';

export function Header() {
  const { data, setData } = useContext(userContext)
  return (
    <header className={styles.header}>
       {data.suit!=='' && 
       <div className={styles.headerNested}>
        <div className={styles.gamer}>Игрок: {data.name}</div>
        <div className={styles.gamerWin}>Выигрышей игрока: {data.winner.human}</div>
        <div className={styles.gameCount}>Кол-во отыгранных игр: {data.count}</div>
        <div className={styles.headerWin}>Выигрышей компьютера: {data.winner.mashine}</div>
        <div className={styles.suit}>Козырь в игре: {data.suit!=="" ? getSuitComponent(data.suit, 14, 14) : ''}</div>
       </div>}
    </header>
  );
}
