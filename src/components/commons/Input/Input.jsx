import styles from './Input.module.scss';

function Input() {
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
