import { useState } from 'react';
import styles from './Input.module.scss';

function Input() {
  const [value, setValue] = useState('');
  // value에 따라 필터링 될 값들 배열 스테이트

  // onChange 이벤트에 따른 필터링

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input className={styles.input} placeholder="스택 명을 입력하세요" />
      <ul className={styles.ul}>
        <li className={styles.li}>dkssud</li>
      </ul>
    </form>
  );
}

export default Input;
