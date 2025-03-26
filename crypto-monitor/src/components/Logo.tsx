import React from 'react';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaChartLine } from 'react-icons/fa';

export const Logo: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <HStack spacing={2}>
      <Box
        p={2}
        borderRadius="lg"
        bg={accentColor}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="40px"
      >
        <FaChartLine size="24px" />
      </Box>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={textColor}
        letterSpacing="tight"
      >
        Crypto Monitor
      </Text>
    </HStack>
  );
}; 