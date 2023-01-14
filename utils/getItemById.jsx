import data from '../app/api/data.json';

const getItemById = (itemId) => {
  console.log(data.clothes)
  return data.clothes.find((item) => item.id === itemId);
};

export default getItemById;
