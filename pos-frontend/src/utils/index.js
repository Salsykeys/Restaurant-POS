export const getRandomBG = () => {
    const colors = [
        'bg-[#f6b100]',
        'bg-[#025cca]',
        'bg-[#be3e3f]',
        'bg-[#02ca3a]',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export const getBgColor = () => {
  const bgArr = [
    "#b73e3e",
    "#5b45b0",
    "#7f167f",
    "#735f32",
    "#1d2569",
    "#285430",
  ];
  const randomBg = Math.floor(Math.random() * bgArr.length);
  const color  = bgArr[randomBg];
  return color;
}