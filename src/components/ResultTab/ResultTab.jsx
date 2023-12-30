import getSrcLink from '../../utils/functions/getSrcLink';

function ResultTab({ techStacks, badgeType }) {
  return (
    <div>
      {techStacks.map((stack) => {
        return (
          <img
            key={stack.title}
            src={getSrcLink(stack, badgeType)}
            alt="Static Badge"
          />
        );
      })}
    </div>
  );
}

export default ResultTab;
