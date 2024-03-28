import React from "react";
import Product from "./Product/Product";

function Products({ products }) {
  return (
    <>
      <div className="container mx-auto p-5 flex  justify-center items-center gap-5 flex-wrap ">
        <Product products={products} />
      </div>
    </>
  );
}

export default Products;
