import styles from './Input.module.scss';

function Input() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        id="InputField_input"
        className={styles.input}
        placeholder="스택 명을 입력하세요"
      />
    </form>
  );
}

export default Input;
