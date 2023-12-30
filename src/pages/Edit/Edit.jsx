import styles from './Edit.module.scss';
import ToggleButton from '../../components/commons/ToggleButton/ToggleButton';
import Input from '../../components/commons/Input/Input';
import Dropdown from '../../components/commons/Dropdown/Dropdown';
import { createContext, useCallback, useState } from 'react';
import BADGE_OPTIONS from '../../constants/badgeOptions';
import BadgeContainer from '../../components/commons/BadgeContainer/BadgeContainer';
import CodeBlock from '../../components/commons/CodeBlock/CodeBlock';

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
        <StackContext.Provider
          value={{ techStacks, onAdd, onDelete, badgeType, setBadgeType }}>
          <BadgeContainer />

          {selectedToggle === 'form' ? (
            <>
              <Dropdown option={BADGE_OPTIONS} />
              <Input />
            </>
          ) : (
            <>
              {techStacks.length > 0 && (
                <CodeBlock techstacks={techStacks} badgeType={badgeType} />
              )}
            </>
          )}
        </StackContext.Provider>
      </ToggleContext.Provider>
    </main>
  );
}

export default Edit;
