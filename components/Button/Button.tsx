import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classNames from 'classnames';

export const Button = ({ children, color, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.brown]: color === 'brown',
        [styles.white]: color === 'white',
      })}
      {...props}>
      {children}
    </button>
  );
};
