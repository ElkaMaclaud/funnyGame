import React, { useContext } from 'react';
import { useAppSelector } from '../../hook';
import { Modal } from '../Content/Modal';
import styles from './layout.css';

interface ILayout {
  children?: React.ReactNode;
}
export function Layout({children}: ILayout) {
  const data = useAppSelector(state => state.user)
  return (
    <div className={styles.layout}>
        <Modal text={`ПРИВЕТСТВУЮ ТЕБЯ, МОЙ ДРУГ!!! \t\n СЫГРАЕМ В ИГРУ? \t\n)`} height={90} />
        {data.content && children}
    </div>
  );
}
