import { useState } from 'react';
import styles from './Input.module.scss';
import getFilteredIcons from '../../../utils/functions/getFilteredIcons';

function Input({ onAdd }) {
  const [value, setValue] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);

  // onChange 이벤트에 따른 필터링
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value.length > 1) {
      setFilteredIcons(getFilteredIcons(value));
    }
  };

  const handleClick = (e) => {
    onAdd({ title: value });
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="스택 명을 입력하세요"
      />
      {value.length > 1 && (
        <ul className={styles.ul}>
          {filteredIcons.length === 0 && (
            <li key={0} onClick={handleClick} className={styles.li}>
              직접 추가하기
            </li>
          )}
          {filteredIcons.length > 0 &&
            filteredIcons.map((icon, i) => {
              return (
                <li
                  onClick={() => {
                    onAdd(icon);
                    setValue('');
                  }}
                  key={`${icon.title}${i}`}
                  className={styles.li}>
                  {icon.title}
                </li>
              );
            })}
        </ul>
      )}
    </form>
  );
}

export default Input;
