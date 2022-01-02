import React from "react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/layout";
import { motion } from "framer-motion";

import Section from "./components/section";
import Layout from "./components/layers/main";
import { WorkGridItem, GridItemStyle } from "./components/grid-item";

const data = [
  {
    id: "qwe",
    title: "test",
    thumbnail: "./media/test.jpg",
  },
  {
    id: "123",
    title: "test2",
    thumbnail: "./media/test2.jpg",
  },
];
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function Works() {
  return (
    <Layout>
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <GridItemStyle />
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Работы
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {data.map((elem, id) => (
              <Section key={id}>
                <WorkGridItem {...elem}>{elem.title}</WorkGridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Container>
      </motion.article>
    </Layout>
  );
}

export default Works;
