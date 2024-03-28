import React from "react";
import Product from "../Products/Product/Product";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Category() {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  console.log(data);
  return (
    <>
      <div className="p-5">
        <h1>category</h1>
        <div className="container mx-auto p-5 flex  justify-center items-center gap-5 flex-wrap ">
          <Product products={data} />
        </div>
      </div>
    </>
  );
}

export default Category;
