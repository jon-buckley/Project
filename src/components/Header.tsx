import React from 'react';
import { Box, Heading, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      as="header"
      bg={bgColor}
      p={4}
      boxShadow="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="lg" color={textColor}>
        Crypto Monitor
      </Heading>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}; 