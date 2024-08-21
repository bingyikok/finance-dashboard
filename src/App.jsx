import React from 'react';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import { StockProvider } from './context/StockContext';
//import './styles/styles.css';
import './App.css';

const App = () => {
  return (
    <StockProvider>
      <body>
        <p><img id="myImage" src="image/budget.png" alt="My Image"></img></p>
        <h1>Finance Dashboard</h1>
        <StockForm />
        <h2>Stock List</h2>
        <StockList />
      </body>
    </StockProvider>
  );
};

export default App;
