import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, useColorModeValue } from '@chakra-ui/react';
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

export const CryptoList = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              sparkline: false,
            },
          }
        );
        setCryptos(response.data);
      } catch (error) {
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
    return <Text>Loading...</Text>;
  }

  return (
    <Box overflowX="auto" bg={bgColor} borderRadius="lg" p={4} boxShadow="lg">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color={textColor}>Name</Th>
            <Th color={textColor}>Price</Th>
            <Th color={textColor}>24h Change</Th>
            <Th color={textColor}>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cryptos.map((crypto) => (
            <Tr key={crypto.id}>
              <Td>
                <Text fontWeight="bold">{crypto.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {crypto.symbol.toUpperCase()}
                </Text>
              </Td>
              <Td>${crypto.current_price.toLocaleString()}</Td>
              <Td>
                <Box display="flex" alignItems="center">
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
              <Td>${crypto.market_cap.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}; 