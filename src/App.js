/** @format */

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

import theme from "./lib/theme";
import Fonts from "./components/fonts";

import Home from "./Home";
// ------------------------
import Works from "./Works";
import Work from "./Work";
// ------------------------
import Blog from "./Blog";
// ------------------------
import PageNotFound from "./404";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Fonts />
        <ChakraProvider theme={theme}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/works/:id' element={<Work />} />
              <Route path='/works' element={<Works />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/404' element={<PageNotFound />} />

              <Route path='*' element={<Navigate to='/404' />} />
            </Routes>
          </AnimatePresence>
        </ChakraProvider>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
