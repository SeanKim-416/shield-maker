import styles from './Badge.module.scss';
import { TiDelete } from 'react-icons/ti';

function Badge({ children }) {
  const handleClick = () => {
    console.log('hi');
  };

  return (
    <span className={styles.badge}>
      {children} <TiDelete onClick={handleClick} className={styles.button} />
    </span>
  );
}

export default Badge;
