import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pet from './Pet';
import Search from './Search';
import Details from './Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './Store/Store';

// Default configration that send to react query to using caching data
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Time
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // component

  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <div>
            <header>
              <Link to="/">Adopt ME!</Link>
            </header>

            <Routes>
              <Route path="/details/:id" element={<Details prop={5} />} />
              <Route path="/" element={<Search />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
