import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import {Link} from "react-router-dom";
import React from 'react';
import "./home.css"
import vg from "../../assets/images/vg.jpg";
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {SiCoursera,SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";
import introVideo from "../../assets/videos/Sachin Tendulkar driving the ball to all parts.mp4"



const Home = () => {
  return (
    <section className='home'>
        <div className="container">
            <Stack
            direction={["column","row"]}
            height={"100%"}
            justifyContent={["center","space-between"]}
            alignItems={"center"}
            spacing={["16","56"]}
            backgroundColor={"red.100"}
            >
              <VStack width={"full"} alignItems={["center","flex-end"]}>
                <Heading children={"LEARN FROM EXPERTS"} size={"2xl"}/>
                <Text children={"Find Valuable Content At Reasonable Price"}/>
                <Link to="/courses">
                  <Button size={"lg"} colorScheme={"yellow"}>Explore Now</Button>
                </Link>
              </VStack>
              <Image className='vector-graphics' src={vg} boxSize={"xs"} objectFit={"contain"} />
            </Stack>
        </div>
        <Box padding={"8"} bg={"blackAlpha.800"}>
          <Heading children={"OUR BRANDS"} textAlign={"center"} fontFamily={"body"} color={"yellow.400"}/>
          <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"} >
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
          </HStack>
        </Box>
        <div className="container2">
          <video src={introVideo} controls autoPlay muted controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
        </div>
    </section>
  )
}

export default Home