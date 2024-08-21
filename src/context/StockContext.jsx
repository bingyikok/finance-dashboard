import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  const addStock = (stock) => {
    setStocks(prevStocks => [...prevStocks, { ...stock, currentPrice: null, profitLoss: null }]);
  };

  const updateStockPrices = useCallback(async () => {
    const apiKey = 'demo'; //2GVLOR8B0BVQIYCQ / demo
    const updatedStocks = await Promise.all(stocks.map(async (stock) => {
      const stockSymbol = stock.symbol.toUpperCase();
      
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`);
        const currentPrice = parseFloat(response.data['Global Quote']['05. price']);
        const purchasePrice = parseFloat(stock.price);
        const profitLoss = (currentPrice - purchasePrice) * parseFloat(stock.quantity);
        return { ...stock, currentPrice, profitLoss };
      } catch (error) {
        alert(`Error fetching price for ${stockSymbol}`);
        //console.error(`Error fetching price for ${stock}:`, error);
        //return { ...stock, currentPrice: null, profitLoss: null };
        return;        
      }
    }));
    setStocks(updatedStocks);
  }, [stocks]);

  return (
    <StockContext.Provider value={{ stocks, addStock, updateStockPrices }}>
      {children}
    </StockContext.Provider>
  );
};