import React from 'react';
// import { useState } from 'react';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import { StockProvider } from './context/StockContext';
//import './styles/styles.css';
import './App.css';

const App = () => {
  return (
    <StockProvider>
      <div>
        <p><img id="myImage" src="/public/budget.png" alt="My Image"></img></p>
        <h1>Finance Dashboard</h1>
        <StockForm />
        <h2>Stock List</h2>
        <StockList />
      </div>
    </StockProvider>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   return(
//     <StockProvider>
//       <div>
//         <p><img id="myImage" src="/finance-dashboard/public/budget.png" alt="My Image"></img></p>
//         <h1>Finance Dashboard</h1>
//         <StockForm />
//         <h2>Stock List</h2>
//         <StockList />
//       </div>
//     </StockProvider>
//   );
// }

export default App;
