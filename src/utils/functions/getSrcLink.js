function getSrcLink(techStacks, buttonType) {
  const hex = techStacks?.hex ? techStacks.hex : 'cccccc';
  const title = techStacks.title.replace('-', ' ');
  const query = techStacks?.slug
    ? `&logo=${techStacks.slug}&logoColor=black`
    : '';

  return `https://img.shields.io/badge/${title}-${hex}?style=${buttonType}${query}`;
}

export default getSrcLink;
