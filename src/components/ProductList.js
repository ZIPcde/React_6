// ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleProductAvailability } from '../slice/productsSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.available ? 'Available' : 'Not Available'}</p>
          <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
          <button onClick={() => dispatch(toggleProductAvailability(product.id))}>Toggle Availability</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;