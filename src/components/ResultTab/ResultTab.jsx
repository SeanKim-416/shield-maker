import { useContext } from 'react';
import getSrcLink from '../../utils/functions/getSrcLink';
import BadgeContainer from '../commons/BadgeContainer/BadgeContainer';
import { StackContext } from '../../pages/Edit/Edit';

function ResultTab() {
  const { techStacks, badgeType } = useContext(StackContext);

  return (
    <BadgeContainer>
      {techStacks.map((stack, i) => {
        return (
          <img
            key={stack.title + i}
            src={getSrcLink(stack, badgeType)}
            alt="Static Badge"
          />
        );
      })}
    </BadgeContainer>
  );
}

export default ResultTab;
