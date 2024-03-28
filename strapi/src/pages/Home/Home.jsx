import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Category from "../Category/Category";
import { useContext } from "react";
import { Context } from "../../utils/Context.jsx";
import { fetchDataFromAPI } from "../../utils/Api.jsx";

function Home() {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    const res = await fetchDataFromAPI("/api/categories?populate=*");
    setCategories(res.data);
  };
  const getProducts = async () => {
    const res = await fetchDataFromAPI("/api/products?populate=*");

    setProducts(res.data);
  };

  return (
    <>
      <Banner />
      <Category categories={categories} />
      <Products products={products} />
    </>
  );
}

export default Home;
