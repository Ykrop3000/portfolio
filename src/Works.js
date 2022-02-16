/** @format */

import React, { useEffect, useState } from "react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/layout";
import { motion } from "framer-motion";

import Section from "./components/section";
import Layout from "./components/layers/main";
import { WorkGridItem, GridItemStyle } from "./components/grid-item";
import { fetch_data_works_all } from "./api";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function Works() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await fetch_data_works_all();
    setData(res);
  }, [setData]);

  return (
    <Layout>
      <motion.article
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}>
        <GridItemStyle />
        <Heading as='h3' fontSize={20} mb={4}>
          Работы
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {data.map((elem, id) => (
            <Section key={id}>
              <WorkGridItem {...elem}>{elem.caption}</WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </motion.article>
    </Layout>
  );
}

export default Works;
