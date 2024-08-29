const colors = [
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const getRandomTagColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

export default getRandomTagColor;
