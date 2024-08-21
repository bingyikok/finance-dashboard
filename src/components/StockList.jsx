import React, { useContext, useEffect } from 'react';
import { StockContext } from '../context/StockContext';
import '../styles/styles.css';

const StockList = () => {
  const { stocks, updateStockPrices } = useContext(StockContext);

  useEffect(() => {
    updateStockPrices();
  }, [updateStockPrices]);

  if (stocks.length === 0) {
    return <div className='dashboardHeader'>No stocks added yet.</div>;
  }
  console.log('loop');
  return (
    <div className='dashboard'>
        {stocks.map((stock, index) => (
          <h2 key={`${stock.symbol}-${index}`}>
            <p>Symbol: {stock.symbol.toUpperCase()}</p>
            <p>Quantity: {stock.quantity}</p>
            <p>Purchase Price: {stock.price}</p>
            <p>Current Price: {stock.currentPrice || 'Loading...'}</p>
            <div class="gains"><p style={{ color: stock.profitLoss >= 0 ? 'green' : 'red' }}>
              Profit/Loss: {stock.profitLoss ? `$${stock.profitLoss.toFixed(2)}` : 'Calculating...'}
            </p></div>
          </h2>
        ))}
    </div>
  );
};

export default StockList;