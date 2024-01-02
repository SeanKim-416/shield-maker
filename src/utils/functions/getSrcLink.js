import getIconColor from './getIconColor';

const getSrcLink = (stack, buttonType) => {
  const hex = stack?.hex ? stack.hex : 'cccccc';
  const title = stack.title.replace('-', ' ');
  const query = stack?.slug
    ? `&logo=${stack.slug}&logoColor=${getIconColor(hex)}&color=${hex}`
    : '';

  return `https://img.shields.io/badge/${title}-${getIconColor(
    hex
  )}?style=${buttonType}${query}`;
};

const getHtmlTag = (stack, buttonType) => {
  return `<img src='${getSrcLink(stack, buttonType)}' alt='badge' />`;
};

export { getSrcLink, getHtmlTag };
