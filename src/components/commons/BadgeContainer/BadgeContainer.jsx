import styles from './BadgeContainer.module.scss';

function BadgeContainer({ children }) {
  return (
    <div className={styles.badgeContainer}>
      {children.length ? children : '기술스택을 추가해주세요'}
    </div>
  );
}

export default BadgeContainer;
