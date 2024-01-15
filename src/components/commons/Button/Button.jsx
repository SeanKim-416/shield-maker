import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

/* props
  btnType : box, floating, share
  btnTheme : primary
*/

export default function Button({ btnTheme, btnSize, children }) {
  return (
    <button
      type="button"
      className={clsx(styles.btn, styles[btnTheme], styles[btnSize])}>
      {children}
    </button>
  );
}
