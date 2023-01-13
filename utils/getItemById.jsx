import data from '../app/api/data.json';

const getItemById = (itemId) => {
  return data.clothes.find((item) => item.id === itemId);
};

export default getItemById;
