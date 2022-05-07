import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Themes/GlobalStyles';
import { DarkTheme } from './Themes/Theme';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';

import './styles.css';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/not-found" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
