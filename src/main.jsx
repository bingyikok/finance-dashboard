import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure this file exists and is correctly named

// Locate the root element in your HTML
const rootElement = document.getElementById('root');

// Ensure rootElement exists
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('No root element found in the HTML.');
}