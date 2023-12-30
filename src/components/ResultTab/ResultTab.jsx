import getSrcLink from '../../utils/functions/getSrcLink';
import BadgeContainer from '../commons/BadgeContainer/BadgeContainer';

function ResultTab({ techStacks, badgeType }) {
  return (
    <BadgeContainer>
      {techStacks.map((stack) => {
        return (
          <img
            key={stack.title}
            src={getSrcLink(stack, badgeType)}
            alt="Static Badge"
          />
        );
      })}
    </BadgeContainer>
  );
}

export default ResultTab;
