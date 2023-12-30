import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Badge from '../../components/commons/Badge/Badge';
import { useState } from 'react';
function Edit() {
  const [techStacks, setTechStacks] = useState([]);
  // input의 입력값

  const onAdd = (newStack) => {
    setTechStacks([...techStacks, newStack]);
  };

  return (
    <main className={styles.main}>
      <ToggleButton />
      <div className={styles.badgeContainer}>
        {techStacks.map((item) => {
          return <Badge>{item}</Badge>;
        })}
      </div>
      <Input onAdd={onAdd} />
    </main>
  );
}

export default Edit;
