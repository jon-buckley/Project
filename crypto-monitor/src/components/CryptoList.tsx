import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, useColorModeValue, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface ErrorState {
  message: string;
  isError: boolean;
}

export const CryptoList: React.FC = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState>({ message: '', isError: false });
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError({ message: '', isError: false });
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              sparkline: false,
            },
            timeout: 10000, // 10 second timeout
          }
        );
        setCryptos(response.data);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch cryptocurrency data';
        setError({ message: errorMessage, isError: true });
        console.error('Error fetching crypto data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error.isError) {
    return (
      <Alert status="error" borderRadius="md">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }

  return (
    <Box overflowX="auto" bg={bgColor} borderRadius="lg" p={4} boxShadow="lg">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color={textColor}>Name</Th>
            <Th color={textColor} isNumeric>Price</Th>
            <Th color={textColor} isNumeric>24h Change</Th>
            <Th color={textColor} isNumeric>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cryptos.map((crypto) => (
            <Tr key={crypto.id} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}>
              <Td>
                <Text fontWeight="bold">{crypto.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {crypto.symbol.toUpperCase()}
                </Text>
              </Td>
              <Td isNumeric>${crypto.current_price.toLocaleString()}</Td>
              <Td isNumeric>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  {crypto.price_change_percentage_24h > 0 ? (
                    <FaArrowUp color="green" />
                  ) : (
                    <FaArrowDown color="red" />
                  )}
                  <Text
                    ml={2}
                    color={crypto.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'}
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </Text>
                </Box>
              </Td>
              <Td isNumeric>${crypto.market_cap.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}; 