import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Badge from '../../components/commons/Badge/Badge';
import Dropdown from '../../components/commons/Dropdown/Dropdown';
import { useState } from 'react';
import BADGE_OPTIONS from '../../constants/badgeOptions';
import ResultTab from '../../components/ResultTab/ResultTab';
function Edit() {
  const [tab, setTab] = useState('form');
  const [techStacks, setTechStacks] = useState([]);
  const [badgeType, setBadgeType] = useState('flat');

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

  const handleSubmit = () => {
    setTab('preview');
  };

  return (
    <main className={styles.main}>
      <ToggleButton onClick={setTab} />
      {tab === 'form' ? (
        <>
          <div className={styles.badgeContainer}>
            {techStacks.map((item, i) => {
              return (
                <Badge key={`${item.title}${i}`} onDelete={onDelete}>
                  {item.title}
                </Badge>
              );
            })}
          </div>
          <Dropdown option={BADGE_OPTIONS} onClick={setBadgeType} />
          <Input onAdd={onAdd} />
          <button onClick={handleSubmit}>이대로 만들기</button>
        </>
      ) : (
        <>
          <ResultTab techStacks={techStacks} badgeType={badgeType} />
        </>
      )}
    </main>
  );
}

export default Edit;
