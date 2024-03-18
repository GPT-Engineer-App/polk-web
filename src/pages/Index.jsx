import React from "react";
import { Box, Heading, Text, Image, Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Flex alignItems="center" marginBottom={8}>
        <Image src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTA2OTEyOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Polk" borderRadius="full" boxSize="150px" marginRight={8} />
        <Box>
          <Heading as="h1" size="2xl">
            James Polk
          </Heading>
          <Text fontSize="xl">Software Engineer & Web Developer</Text>
        </Box>
      </Flex>

      <Box marginBottom={8}>
        <Heading as="h2" size="xl" marginBottom={4}>
          About Me
        </Heading>
        <Text fontSize="lg">I'm a passionate software engineer with 5+ years of experience building web applications. I specialize in React, Node.js and modern JavaScript. I love tackling complex problems and learning new technologies.</Text>
      </Box>

      <Box marginBottom={8}>
        <Heading as="h2" size="xl" marginBottom={4}>
          Projects
        </Heading>
        <Box marginBottom={4}>
          <Link href="#" fontWeight="bold">
            Project 1
          </Link>
          <Text>Description of project 1 goes here.</Text>
        </Box>
        <Box>
          <Link href="#" fontWeight="bold">
            Project 2
          </Link>
          <Text>Description of project 2 goes here.</Text>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" size="xl" marginBottom={4}>
          Connect With Me
        </Heading>
        <Flex>
          <Link href="#" marginRight={4}>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="#" marginRight={4}>
            <Icon as={FaTwitter} w={8} h={8} />
          </Link>
          <Link href="#">
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
