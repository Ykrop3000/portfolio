/** @format */

import React from "react";
import { Box, useColorModeValue, Avatar, Text, Stack } from "@chakra-ui/react";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

import Section from "./components/section";
import Layout from "./components/layers/main";
import Skill from "./components/skill-item";
import Emoji from "./components/emoji";
import GithubLogo from "./components/icons/github";
import VkLogo from "./components/icons/vk";

import ParallaxWlapper from "./ParallaxWlapper";

import { skills } from "./lib/config";

function Home() {
  return (
    <>
      <Box display={{ base: "none", xl: "block" }}>
        <ParallaxWlapper />
      </Box>

      <Layout>
        <Section>
          <Box
            w='100%'
            borderRadius='lg'
            mb={6}
            p={3}
            textAlign='center'
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}>
            <Emoji symbol={"👋 "} />
            Привет, я full-stack разработчик из Росии!
          </Box>
        </Section>
        <Section>
          <Box mb={{ base: "24px", xl: "550px" }} display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as='h2' variant='page-title'>
                Анреев Григорий
              </Heading>
              <p>Digital Craftsman ( Artist / Developer / Designer )</p>
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Обо мне
          </Heading>
          <Box mb={5} w='100%' display={"flex"} justifyContent={"center"}>
            <Avatar
              size='2xl'
              name='Анреев Григорий'
              src='https://bit.ly/dan-abramov'
            />
          </Box>
          <Text>
            Готов предложить широкий диапазон работ в любой сфере услуг. Так же
            гарантирую быстрое и качественное выполнение заказов. Индивидуальный
            подход к каждому клиенту. Множество приятных бонусов и скидок.
          </Text>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Мои навыки
          </Heading>
          <SimpleGrid pt={3} columns={[1, 2, 2]} gap={4}>
            {skills.map((skill, id) => (
              <Skill key={id} {...skill} />
            ))}
          </SimpleGrid>
        </Section>
        {/* Social  */}
        <Section>
          <Heading as='h3' variant='section-title'>
            Ссылки
          </Heading>
          <Stack direction={"row"} gap={6}>
            <a href='https://github.com/Ykrop3000' target={"_blank"}>
              <GithubLogo />
            </a>
            <a href='https://vk.com/ykroptop' target={"_blank"}>
              <VkLogo />
            </a>
          </Stack>
        </Section>
      </Layout>
    </>
  );
}

export default Home;
