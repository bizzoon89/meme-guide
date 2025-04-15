import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
