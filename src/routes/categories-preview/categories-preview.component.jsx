import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="preview-wrapper">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <>
            <CategoryPreview key={title} title={title} products={products} />
            <div className="preview-btn-container">
              <Link to={title}>
                <Button buttonType="inverted">View More</Button>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
