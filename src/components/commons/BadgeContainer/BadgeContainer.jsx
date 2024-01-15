import { useContext } from 'react';
import styles from './BadgeContainer.module.scss';
import { StackContext, ToggleContext } from '../../../pages/Edit/Edit';
import { getSrcLink } from '../../../utils/functions/getSrcLink';
import Badge from '../Badge/Badge';

function BadgeContainer() {
  const { techStacks, badgeType } = useContext(StackContext);
  const { selectedToggle } = useContext(ToggleContext);

  return (
    <div className={styles.badgeContainer}>
      {techStacks.map((stack, i) => {
        return selectedToggle === 'form' ? (
          <Badge key={`${stack.title}${i}`}>{stack.title}</Badge>
        ) : (
          <img
            key={stack.title + i}
            src={getSrcLink(stack, badgeType)}
            alt="Static Badge"
          />
        );
      })}
    </div>
  );
}

export default BadgeContainer;
