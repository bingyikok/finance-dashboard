import React, { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';
import '../styles/styles.css';

const StockForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const { addStock } = useContext(StockContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol && quantity && price) {
      addStock({ symbol, quantity, price });
      setSymbol('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Stock Symbol" 
        value={symbol.toUpperCase()} 
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input 
        type="number" 
        step="0.01" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;