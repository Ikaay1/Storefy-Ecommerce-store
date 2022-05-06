import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat}`
            : "/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (filters?.size || filters?.color) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {filters?.size || filters?.color ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : location?.pathname === "/products" ? products.map((item) => <Product item={item} key={item._id} />) : 
        products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  )
}

export default Products