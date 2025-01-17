import React from "react";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

function RelatedProduct({ productId, categoryId }) {
  const { data } = useFetch(
    `/api/products?populate=*filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <>
      <Products />
    </>
  );
}

export default RelatedProduct;
