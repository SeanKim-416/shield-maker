import { useContext } from 'react';
import styles from './Badge.module.scss';
import { TiDelete } from 'react-icons/ti';
import { StackContext } from '../../../pages/Edit/Edit';

function Badge({ children }) {
  const { onDelete } = useContext(StackContext);

  const handleClick = () => {
    onDelete(children);
  };

  return (
    <span className={styles.badge}>
      {children} <TiDelete onClick={handleClick} className={styles.button} />
    </span>
  );
}

export default Badge;
