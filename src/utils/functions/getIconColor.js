const getIconColor = (hex) => {
  const rgbValue = {
    red: parseInt(hex.slice(0, 2), 16),
    green: parseInt(hex.slice(2, 4), 16),
    blue: parseInt(hex.slice(4, 6), 16),
  };

  const colorBrightness = (
    +(rgbValue.red * 299 + rgbValue.green * 587 + rgbValue.blue * 114) / 255000
  ).toFixed(2);

  if (colorBrightness < 0.5) {
    return 'white';
  } else {
    return 'black';
  }
};

export default getIconColor;
