import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Badge from '../../components/commons/Badge/Badge';
function Edit() {
  // 저장될 데이터들
  // input의 입력값
  return (
    <main className={styles.main}>
      <ToggleButton />
      <div className={styles.badgeContainer}>
        <Badge>깃허브</Badge>
        <Badge>깃허브</Badge>
        <Badge>깃허브</Badge>
        <Badge>깃허브</Badge>
      </div>
      <Input />
    </main>
  );
}

export default Edit;
