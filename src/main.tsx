import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import "react-loading-skeleton/dist/skeleton.css";

import "./styles/global.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {

    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }

  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>

      <QueryClientProvider client={queryClient}>

        <App />

        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>

    </BrowserRouter>

  </StrictMode>,
)
