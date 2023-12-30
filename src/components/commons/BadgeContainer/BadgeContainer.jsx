import styles from './BadgeContainer.module.scss';

function BadgeContainer({ children }) {
  return <div className={styles.badgeContainer}>{children}</div>;
}

export default BadgeContainer;
