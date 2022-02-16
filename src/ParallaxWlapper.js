/** @format */

import React from "react";
import { Button, Box, useColorModeValue } from "@chakra-ui/react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/layout";
import {
  ParallaxBanner,
  Parallax,
  useParallaxController,
} from "react-scroll-parallax";
import Section from "./components/section";
import Layout from "./components/layers/main";
import { Global } from "@emotion/react";

function ParallaxImage({ url, styles = {}, classes = "" }) {
  const parallaxController = useParallaxController();
  function handleLoad() {
    parallaxController.update();
  }
  return (
    <img
      src={url}
      className={classes}
      onLoad={handleLoad}
      style={Object.assign(
        {},
        {
          display: "block",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        },
        styles
      )}
    />
  );
}

const speed = 1.8;

export const PrallaxStyle = () => (
  <Global
    styles={`
      .vertical > div > div{
        inset: unset !important;
        bottom: 0 !important;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }
      .w100{
          width: 100%;
      }
    `}
  />
);

function ParallaxWlapper() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}>
      <PrallaxStyle />
      <div className='vertical'>
        <ParallaxBanner
          layers={[
            {
              children: (
                <ParallaxImage
                  url={"/parallax/background.jpg"}
                  classes={"w100"}
                />
              ),
              speed: 0,
            },
            {
              expanded: true,
              children: (
                <ParallaxImage url={"/parallax/layer01.png"} classes={"w100"} />
              ),

              speed: 5 * speed,
            },
            {
              expanded: true,
              children: (
                <ParallaxImage
                  url={"/parallax/layer02.png"}
                  classes={"w100"}
                  styles={{ paddingBottom: "250px" }}
                />
              ),

              speed: 4 * speed,
            },
            {
              expanded: true,
              children: (
                <ParallaxImage
                  url={"/parallax/layer03.png"}
                  classes={"w100"}
                  styles={{ paddingBottom: "200px" }}
                />
              ),

              speed: 6 * speed,
            },
            {
              expanded: true,
              children: <ParallaxImage url={"/parallax/layer05.png"} />,
              speed: 18,
            },
            {
              expanded: true,
              children: (
                <ParallaxImage
                  url={"/parallax/layer08.png"}
                  classes={"w100"}
                  styles={{ paddingBottom: "120px" }}
                />
              ),
              speed: 10 * speed,
            },
            {
              expanded: true,
              children: (
                <ParallaxImage
                  url={"/parallax/layer09.png"}
                  classes={"w100"}
                  styles={{
                    boxShadow: `0px 250px 0px 0px ${useColorModeValue(
                      "#f0e7db",
                      "#271638"
                    )}`,
                  }}
                />
              ),
              speed: 20 * speed,
            },
            // {
            //   expanded: true,
            //   children: (
            //     <div
            //       style={{
            //         width: "100%",
            //         height: "120px",
            //         background: useColorModeValue("#f0e7db", "#271638"),
            //       }}></div>
            //   ),
            //   speed: 5,
            // },
          ]}
          style={{ aspectRatio: "2 / 1" }}
        />
      </div>
    </div>
  );
}

export default ParallaxWlapper;
