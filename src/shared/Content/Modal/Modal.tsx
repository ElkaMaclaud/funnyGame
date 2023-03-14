import React, { ChangeEvent, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../hook';
import { addUserData } from '../../../store/slice';
import styles from './modal.css';

interface IModal {
  text:string
  timer?:number|null
  height:number
}

export function Modal({text, timer=null, height}: IModal) {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('') 
  const node = document.querySelector('#react_modal');
  if (!node) return null
  useLayoutEffect(() => {
    if (timer!==null) {
      active ? setTimeout(() => setActive(false), timer) : null
    }  
  }, [active])

    function handleSubmit() {
      dispatch(addUserData([name, gender]))
      function handleClick(event: MouseEvent) {
        if (event.target instanceof Node && ref.current?.contains(event.target)) {
          setActive(false);
        } 
    }
    document.addEventListener('click', handleClick);
    return () => {
        document.removeEventListener('click', handleClick);
      }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }
  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  return ReactDOM.createPortal((
    <div className={active ? timer!==null ? styles.modal : styles.modalForm : styles.modalFalse} ref={ref} style={{height: `${height}%`}}>
      <h2 className={timer ? styles.h2 : styles.h2Min}>{text}</h2>
      {timer===null && <div className={styles.form}>
          <div className={styles.name}>
            <label>КАК Я МОГУ К ТЕБЕ ОБРАЩАТЬСЯ?</label>
            <input type="text" placeholder='NO NAME' onChange={handleChangeName}/>
          </div>
          <div>
            <label className={styles.genderLabel}>КАКОГО ТЫ ПОЛА</label>
            <input className={styles.gender} type="radio" name='gender' onChange={handleChange} id='F' placeholder='Ж' value='F'/><label className={styles.genderL} htmlFor="F">Ж</label>
            <input className={styles.gender} type="radio" name='gender' onChange={handleChange} id='M' placeholder='М' value='M'/><label className={styles.genderL} htmlFor="M">М</label>
          </div>
            <button className={styles.button}  onClick={() => handleSubmit()}>СОХРАНИТЬ!</button>
        </div>}
    </div>
  ), node);
}