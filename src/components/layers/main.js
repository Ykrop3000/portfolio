/** @format */

import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "../navbar";

function MainLayer({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Box pt={12} w='100%' h='100%'>
        <Container maxW='container.md'> {children}</Container>
      </Box>
    </>
  );
}

export default MainLayer;
