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

  const onDelete = (targetStack) => {
    setTechStacks(
      techStacks.filter((stack) => {
        return targetStack !== stack.title;
      })
    );
  };

  return (
    <main className={styles.main}>
      <ToggleButton />
      <div className={styles.badgeContainer}>
        {techStacks.map((item, i) => {
          return (
            <Badge key={`${item.title}${i}`} onDelete={onDelete}>
              {item.title}
            </Badge>
          );
        })}
      </div>
      <Input onAdd={onAdd} />
    </main>
  );
}

export default Edit;
