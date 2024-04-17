// ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slice/productsSlice';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: Date.now(), name, description, price, available }));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} /> Available
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
