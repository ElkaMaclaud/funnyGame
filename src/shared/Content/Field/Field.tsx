import React from 'react';
import styles from './field.css';

interface IFieldProps {
  flag?: boolean;
  value: string;
  shadow?:boolean
  children?: React.ReactNode;
}

export function Field({ flag=false, value, shadow=false, children }: IFieldProps) {
  return (
      <button style={shadow ? {border: `1px solid rgb(56, 46, 46)`} : {}} className={!flag ? styles.field : styles.active} value={value}>
        {children}
      </button>
  );
}
