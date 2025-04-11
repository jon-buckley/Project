import React, { useState } from 'react'
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Container,
  Heading,
  Text,
  useToast,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Switch,
  HStack,
} from '@chakra-ui/react'
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'

interface FormData {
  fromPost: string
  toDirectorates: string[]
  ccDirectorates: string[]
  foreignSecretary: string
  actionOfficer: string
  ccIndividuals: string[]
  contact: string
  contactPosition: string
  contactTel: string
  additionalContacts: string[]
  hasExternalContacts: boolean
  namedRecipients: boolean
}

export default function DistributionForm() {
  const [formData, setFormData] = useState<FormData>({
    fromPost: '',
    toDirectorates: [],
    ccDirectorates: [],
    foreignSecretary: '',
    actionOfficer: '',
    ccIndividuals: [],
    contact: '',
    contactPosition: '',
    contactTel: '',
    additionalContacts: [],
    hasExternalContacts: false,
    namedRecipients: false,
  })

  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    toast({
      title: 'Form submitted.',
      description: 'Your distribution form has been submitted successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        bg="white"
        p={8}
        rounded="lg"
        shadow="base"
        spacing={6}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="lg" color="fcdo.500">Distribution</Heading>
          
          <HStack justify="flex-end">
            <Text>Named Recipients</Text>
            <Switch
              colorScheme="fcdo"
              isChecked={formData.namedRecipients}
              onChange={(e) => setFormData({ ...formData, namedRecipients: e.target.checked })}
            />
          </HStack>

          <FormControl isRequired>
            <FormLabel>From FCDO / Post</FormLabel>
            <Select
              placeholder="Select your Post"
              value={formData.fromPost}
              onChange={(e) => setFormData({ ...formData, fromPost: e.target.value })}
            >
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="berlin">Berlin</option>
              {/* Add more options as needed */}
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>To Directorates / Posts / OGDs</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Start typing to search Post's"
                onChange={(e) => {
                  // Handle search/filter functionality
                }}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Cc Directorates / Posts / OGDs (Optional)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Start typing to search Post's"
                onChange={(e) => {
                  // Handle search/filter functionality
                }}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Foreign Secretary / Head of Mission Surname</FormLabel>
            <Input
              value={formData.foreignSecretary}
              onChange={(e) => setFormData({ ...formData, foreignSecretary: e.target.value })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Action Officer (Optional)</FormLabel>
            <Input
              placeholder="Start typing a name"
              value={formData.actionOfficer}
              onChange={(e) => setFormData({ ...formData, actionOfficer: e.target.value })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Cc Individual Names (Optional)</FormLabel>
            <Input
              placeholder="Start typing a name"
              onChange={(e) => {
                // Handle individual names input
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Contact</FormLabel>
            <Input
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Contact Position</FormLabel>
            <Input
              value={formData.contactPosition}
              onChange={(e) => setFormData({ ...formData, contactPosition: e.target.value })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Contact Tel No. (Optional)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                value={formData.contactTel}
                onChange={(e) => setFormData({ ...formData, contactTel: e.target.value })}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Additional Contacts (Optional)</FormLabel>
            <Input
              placeholder="Start typing a name"
              onChange={(e) => {
                // Handle additional contacts input
              }}
            />
          </FormControl>

          <Checkbox
            colorScheme="fcdo"
            isChecked={formData.hasExternalContacts}
            onChange={(e) => setFormData({ ...formData, hasExternalContacts: e.target.checked })}
          >
            Add additional Contacts | Names | Action Officers that are outside the FCDO
          </Checkbox>

          <Button type="submit" size="lg" colorScheme="fcdo">
            Next
          </Button>
        </VStack>
      </Box>
    </Container>
  )
} 