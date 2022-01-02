import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import { Link as ReactLink, useLocation } from "react-router-dom";

import Logo from "./logo";
import ThemeToggleButton from "./theme-toggle-button";
import { urls } from "../lib/config";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      as={ReactLink}
      to={href}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      _target={_target}
      {...props}
    >
      {children}
    </Link>
  );
};

function Navbar(props) {
  const currentPath = useLocation();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        {/* Navigation links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {urls.map((url) => (
            <LinkItem key={url.path} path={currentPath} href={url.path}>
              {url.ruName}
            </LinkItem>
          ))}
        </Stack>
        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}
          <ThemeToggleButton />

          {/* Mobile navigation links */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {urls.map((url) => (
                  <MenuItem as={ReactLink} to={url.path} key={url.path}>
                    {url.ruName}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
