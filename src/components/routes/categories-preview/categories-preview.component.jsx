import { useContext } from "react";

import CategoryPreview from "../../category-preview/category-preview.component";

import { CategoriesContext } from "../../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
