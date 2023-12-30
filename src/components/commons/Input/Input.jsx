import { useState } from 'react';
import styles from './Input.module.scss';
import getFilteredTitles from '../../../utils/functions/getFilteredTitles';

function Input({ onAdd }) {
  const [value, setValue] = useState('');
  const [filteredTitles, setFilteredTitles] = useState([]);

  // onChange 이벤트에 따른 필터링
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value.length > 1) {
      setFilteredTitles(getFilteredTitles(value));
    }
  };

  const handleClick = (e) => {
    onAdd(e.target.dataset['title']);
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={handleChange}
        className={styles.input}
        placeholder="스택 명을 입력하세요"
      />
      {value.length > 1 && (
        <ul className={styles.ul}>
          {filteredTitles.length === 0 && (
            <li
              key={0}
              onClick={handleClick}
              data-title={value}
              className={styles.li}>
              직접 추가하기
            </li>
          )}
          {filteredTitles.length > 0 &&
            filteredTitles.map((title, i) => {
              return (
                <li
                  onClick={handleClick}
                  key={`${title}${i}`}
                  data-title={title}
                  className={styles.li}>
                  {title}
                </li>
              );
            })}
        </ul>
      )}
    </form>
  );
}

export default Input;
