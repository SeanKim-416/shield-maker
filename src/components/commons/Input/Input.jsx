import { useState } from 'react';
import styles from './Input.module.scss';
import getFilteredTitles from '../../../utils/functions/getFilteredTitles';

function Input() {
  const [value, setValue] = useState('');
  const [filteredTitles, setFilteredTitles] = useState([]);

  // onChange 이벤트에 따른 필터링
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value.length > 1) {
      setFilteredTitles(getFilteredTitles(value));
    }
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
          {filteredTitles.map((title, i) => {
            return (
              <li key={`${title}${i}`} className={styles.li}>
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
