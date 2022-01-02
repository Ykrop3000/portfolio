import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import theme from "./lib/theme";

import Home from "./Home";
import Works from "./Works";
import Fonts from "./components/fonts";

function App() {
  return (
    <BrowserRouter>
      <Fonts />
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </AnimatePresence>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
