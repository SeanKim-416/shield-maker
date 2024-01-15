import styles from './ToggleButton.module.scss';
import { useContext } from 'react';
import { ToggleContext } from '../../../pages/Edit/Edit';
import clsx from 'clsx';

function ToggleButton() {
  const { selectedToggle, setSelectedToggle } = useContext(ToggleContext);

  const handleClick = (e) => {
    setSelectedToggle(e.target.dataset['selected']);
  };

  return (
    <div className={styles.container}>
      <button
        data-selected="form"
        onClick={handleClick}
        className={clsx(
          styles.button,
          selectedToggle === 'form' ? styles.selected : false
        )}>
        입력
      </button>
      <button
        data-selected="result"
        onClick={handleClick}
        className={clsx(
          styles.button,
          selectedToggle === 'result' ? styles.selected : false
        )}>
        미리보기
      </button>
    </div>
  );
}

export default ToggleButton;
