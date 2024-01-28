import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreen from "./FullScreen"; 
 
const greeting = "Hello, I am John!"; 
const bio1 = "A Front End Developer"; 
const bio2 = "Specialized in React"; 
 
const Landing = () => ( 
  <FullScreen justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#5ea4c5" > 
    <VStack spacing={16}> 
      <VStack spacing={4} alignItems="center"> 
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" name="Your Name" /> 
        <Heading as="h4" size="md" noOfLines={1}> {greeting} </Heading> 
      </VStack> 
      <VStack spacing={6}> 
        <Heading as="h1" size="3xl" noOfLines={1}> {bio1} </Heading> 
        <Heading as="h1" size="3xl" noOfLines={1}> {bio2} </Heading> 
      </VStack> 
    </VStack> 
  </FullScreen> 
); 
 
export default Landing;