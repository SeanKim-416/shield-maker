import styles from './ToggleButton.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

function ToggleButton() {
  const [selected, setSelected] = useState('form');
  return (
    <div className={styles.container}>
      <button
        onClick={() => setSelected('form')}
        className={clsx(
          styles.button,
          selected === 'form' ? styles.selected : false
        )}>
        입력
      </button>
      <button
        onClick={() => setSelected('preview')}
        className={clsx(
          styles.button,
          selected === 'preview' ? styles.selected : false
        )}>
        미리보기
      </button>
    </div>
  );
}

export default ToggleButton;
