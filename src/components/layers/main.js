import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "../navbar";

function MainLayer({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxW="container.md" pt={14} w="100%" h="100%">
        {children}
      </Container>
    </>
  );
}

export default MainLayer;
