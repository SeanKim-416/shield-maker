import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
function Edit() {
  return (
    <main className={styles.main}>
      <ToggleButton />
      <div className={styles.badgeContainer}></div>
      <Input />
    </main>
  );
}

export default Edit;
