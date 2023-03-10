import React, { useContext } from 'react';
import { Modal } from '../Content/Modal';
import { userContext } from '../context/userDataContext';
import styles from './layout.css';

interface ILayout {
  children?: React.ReactNode;
}
export function Layout({children}: ILayout) {
  const { data, setData } = useContext(userContext)
  return (
    <div className={styles.layout}>
        <Modal text={`ПРИВЕТСТВУЮ ТЕБЯ, МОЙ ДРУГ!!! \t\n СЫГРАЕМ В ИГРУ? \t\n)`} height={90} />
        {data.content && children}
    </div>
  );
}
