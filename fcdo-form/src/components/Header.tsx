import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Container,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <Box bg="fcdo.500" color="white" py={2}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            <Image
              src="/fcdo-logo.png"
              alt="FCDO Logo"
              height="40px"
              fallbackSrc="https://via.placeholder.com/40"
            />
            <Text fontSize="xl" fontWeight="bold">
              Foreign, Commonwealth & Development Office
            </Text>
          </HStack>

          <HStack spacing={8}>
            <Text>Home</Text>
            <Text fontWeight="bold">New DipTel</Text>
            <Text>My DipTels</Text>
            <Text>Help</Text>
            <Text>Admin</Text>

            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Avatar size="sm" name="User Name" />}
                variant="ghost"
                _hover={{ bg: 'fcdo.600' }}
              />
              <MenuList color="gray.800">
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
} 