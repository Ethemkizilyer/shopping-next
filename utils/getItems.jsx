import data from "../app/api/data.json";

// Shuffle the items
const shuffle = (array) => {
    console.log(array.length);
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getItems = () => {
  return shuffle(data.clothes);
};

export default getItems;
