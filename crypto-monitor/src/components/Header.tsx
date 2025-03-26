import React from 'react';
import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      as="header"
      bg={bgColor}
      p={4}
      boxShadow="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Logo />
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        size="lg"
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.700'),
          transform: 'scale(1.1)',
          transition: 'all 0.2s',
        }}
      />
    </Box>
  );
}; 