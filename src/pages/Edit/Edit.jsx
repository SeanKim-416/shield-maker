import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Badge from '../../components/commons/Badge/Badge';
import Dropdown from '../../components/commons/Dropdown/Dropdown';
import { createContext, useState } from 'react';
import BADGE_OPTIONS from '../../constants/badgeOptions';
import ResultTab from '../../components/ResultTab/ResultTab';
import BadgeContainer from '../../components/commons/BadgeContainer/BadgeContainer';

export const ToggleContext = createContext();

function Edit() {
  const [selectedToggle, setSelectedToggle] = useState('form');
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

  return (
    <main className={styles.main}>
      <ToggleContext.Provider value={{ selectedToggle, setSelectedToggle }}>
        <ToggleButton />
      </ToggleContext.Provider>
      {selectedToggle === 'form' ? (
        <>
          <BadgeContainer>
            {techStacks.map((item, i) => {
              return (
                <Badge key={`${item.title}${i}`} onDelete={onDelete}>
                  {item.title}
                </Badge>
              );
            })}
          </BadgeContainer>

          <Dropdown option={BADGE_OPTIONS} onClick={setBadgeType} />
          <Input onAdd={onAdd} />
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
