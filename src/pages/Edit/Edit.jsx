import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Badge from '../../components/commons/Badge/Badge';
import Dropdown from '../../components/commons/Dropdown/Dropdown';
import { createContext, useCallback, useMemo, useState } from 'react';
import BADGE_OPTIONS from '../../constants/badgeOptions';
import ResultTab from '../../components/ResultTab/ResultTab';
import BadgeContainer from '../../components/commons/BadgeContainer/BadgeContainer';

export const ToggleContext = createContext();
export const StackContext = createContext();

function Edit() {
  const [selectedToggle, setSelectedToggle] = useState('form');
  const [techStacks, setTechStacks] = useState([]);
  const [badgeType, setBadgeType] = useState('flat');

  const onAdd = useCallback((newStack) => {
    setTechStacks((prevStacks) => [...prevStacks, newStack]);
  }, []);

  const onDelete = useCallback((targetStack) => {
    setTechStacks((prevStacks) =>
      prevStacks.filter((stack) => {
        return targetStack !== stack.title;
      })
    );
  }, []);

  return (
    <main className={styles.main}>
      <ToggleContext.Provider value={{ selectedToggle, setSelectedToggle }}>
        <ToggleButton />
      </ToggleContext.Provider>
      <StackContext.Provider
        value={{ techStacks, onAdd, onDelete, badgeType, setBadgeType }}>
        {selectedToggle === 'form' ? (
          <>
            <BadgeContainer>
              {techStacks.map((item, i) => {
                return <Badge key={`${item.title}${i}`}>{item.title}</Badge>;
              })}
            </BadgeContainer>

            <Dropdown option={BADGE_OPTIONS} />
            <Input />
          </>
        ) : (
          <>
            <ResultTab badgeType={badgeType} />
          </>
        )}
      </StackContext.Provider>
    </main>
  );
}

export default Edit;
