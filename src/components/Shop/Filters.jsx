import { useState, useEffect } from "react";
import ListCategory from "./ListCategory";
import ListTags from "./ListTags";
import { getAllCategory } from "../../services/product.service";

const Filters = () => {
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    getAllCategory().then((res) => setListCategory(res.data.data));
  }, []);

  return (
    <>
      <ListCategory listCategory={listCategory} />
      <ListTags />
    </>
  );
};

export default Filters;
