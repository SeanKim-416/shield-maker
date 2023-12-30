import ICONS from '../../constants/icons';

const getFilteredIcons = (value) => {
  const filteredTitles = ICONS.filter((icon) => {
    return icon.title.toLowerCase().includes(value);
  });

  return filteredTitles;
};

export default getFilteredIcons;
