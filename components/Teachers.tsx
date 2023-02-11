import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,

  Box,
  SimpleGrid,


} from '@chakra-ui/react';


export default function Teachers() {
  return (

    <Stack as={Box} w='100%' h='100%' textAlign='center' margin='4' bgGradient='linear(to-r, gray.50, yellow.50, pink.50)'>

      <Heading padding={'4'} color={'gray.800'}>Teachers Intoduction</Heading>

      <Text padding={'2'} color={'gray.500'} fontSize={'lg'}>
        most competant and best teachers.
      </Text>


      <HStack align='center' spacing='2' margin={{md:'4', sm:'1'}} padding={{md:'3', sm:'1'}} >

        <Box padding={{md:'4', sm:'1'}} display={{ md: 'flex' }}>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline' 
            padding={{md:'4', sm:'1'}}>

            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/images/daniyal.jpeg'
              alt='Daniyal Nagori' />

            <Stack align={'center'} bg='gray.100'>
              <CardBody>
                <Heading padding={'3'} size='md' color={'green.400'} fontWeight={600}>Daniyal Nagori </Heading>

                <Text py='2' padding={'2'}>
                  Software Development Lead at Panacloud Pvt Ltd
                  Teaching Cloud Native Technology and related topics in developing next generation apps.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='linkedin'>
                  follow
                </Button>
              </CardFooter>
            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            padding={{md:'4', sm:'1'}}
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/images/Sir-ZKhan.jpeg'
              alt='Zia Khan'
            />

            <Stack align={'center'} bg='gray.100'>
              <CardBody>
                <Heading padding={'3'} size='md' color={'green.400'} fontWeight={600}>Zia Khan</Heading>

                <Text py='2' padding={'2'}>
                  Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative for AI and Computing
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='linkedin'>
                  follow
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        
      </HStack>

    </Stack>



  )
}

