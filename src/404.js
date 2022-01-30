/** @format */

import React from "react";
import Layout from "./components/layers/main";
import { Box, useColorModeValue, Button, Text, Stack } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Global
        styles={
          "@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');"
        }
      />
      <Box
        w='100%'
        h='100%'
        display={"flex"}
        pt={10}
        justifyContent={"center"}
        flexDirection={"column"}>
        <Text
          fontFamily={"'Share Tech Mono'"}
          textAlign={"center"}
          as='h1'
          css={{ backdropFilter: "blur(10px)", fontSize: "min(30vw, 300px)" }}
          color={useColorModeValue("purple.500", "orange.200")}>
          404
        </Text>
        <Button onClick={() => navigate("/")} display={"flex"}>
          Домой
        </Button>
      </Box>
    </Layout>
  );
}

export default PageNotFound;
