import data from "../pages/api/data.json";

const getAllStaticPaths = () => {
  return data.clothes.map((item) => ({
    params: { id: item.id },
  }));
};

export default getAllStaticPaths;
