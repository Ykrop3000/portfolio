/** @format */

import React, { useEffect, useState } from "react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/layout";
import { Image, Text, Box, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

import Section from "./components/section";
import Layout from "./components/layers/main";
import { WorkGridItem, GridItemStyle } from "./components/grid-item";
import { fetch_data_one } from "./api";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function Work() {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(async () => {
    const res = await fetch_data_one(id);
    if (!res.title) {
      navigate("/404");
    }
    setData(res);
  }, [setData]);

  return (
    <Layout>
      <GridItemStyle />
      {!data && (
        <Box display={"flex"} justifyContent={"center"} paddingY={10} w='100%'>
          <Spinner size={"lg"} />
        </Box>
      )}
      {data && (
        <>
          <Section>
            <Heading as='h1' fontSize={28} my={4}>
              {data.title}
            </Heading>
            <Box w='100%' p={[1, 2, 5]}>
              <Image
                src={data.thumbnail}
                alt={data.title}
                className='grid-item-thumbnail'
                placeholder='blur'
                loading='lazy'
              />
            </Box>
          </Section>
          <Section delay={0.2}>
            <Text fontSize={20}>
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </Text>
          </Section>
        </>
      )}
    </Layout>
  );
}

export default Work;
