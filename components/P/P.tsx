import React from 'react';
import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ children, size = 'f16w300', className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.f14w300]: size === 'f14w300',
        [styles.f14w700]: size === 'f14w700',
        [styles.f16w200]: size === 'f16w200',
        [styles.f16w300]: size === 'f16w300',
        [styles.f16w700]: size === 'f16w700',
      })}
      {...props}>
      {children}
    </p>
  );
};
