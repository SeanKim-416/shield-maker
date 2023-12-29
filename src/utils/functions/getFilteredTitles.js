import ICON_TITLES from '../../constants/iconTitles';

const getFilteredTitles = (value) => {
  const filteredTitles = ICON_TITLES.filter((title) => {
    return title.toLowerCase().includes(value);
  });

  return filteredTitles;
};

export default getFilteredTitles;
