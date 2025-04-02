import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'
import { FaRocket, FaBrain, FaChartLine } from 'react-icons/fa'

const Feature = ({ title, text, icon }: { title: string; text: string; icon: React.ReactElement }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={useColorModeValue('brand.500', 'brand.600')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Hero() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              color={useColorModeValue('brand.500', 'brand.400')}
            >
              Prism AI
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Transform your business with cutting-edge artificial intelligence solutions. 
            Our advanced AI technology helps you make smarter decisions, automate processes, 
            and unlock new opportunities for growth.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'brand'}
              bg={'brand.500'}
              _hover={{ bg: 'brand.400' }}
            >
              Get Started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<FaRocket />}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
            bg={useColorModeValue('white', 'gray.800')}
          >
            <Image
              alt={'AI Technology Visualization'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        mt={20}
        justify={'center'}
      >
        <Feature
          icon={<Icon as={FaBrain} w={10} h={10} />}
          title={'Advanced AI'}
          text={'Leverage state-of-the-art artificial intelligence to solve complex problems.'}
        />
        <Feature
          icon={<Icon as={FaChartLine} w={10} h={10} />}
          title={'Data-Driven Insights'}
          text={'Make informed decisions with powerful analytics and predictive modeling.'}
        />
        <Feature
          icon={<Icon as={FaRocket} w={10} h={10} />}
          title={'Scalable Solutions'}
          text={'Scale your business with flexible and adaptable AI solutions.'}
        />
      </Stack>
    </Container>
  )
} 