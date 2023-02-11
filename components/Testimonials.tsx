
import { Image, Box, Stack, Text, useColorModeValue, Heading } from '@chakra-ui/react';

export default function Testimonials() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Heading color={'gray.800'}>
        Student Views
      </Heading>
      <Text
        color={'gray.500'} fontSize={'lg'}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience learn from panacloud team and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the teaching concept so quickly.
        Thank you for encouraging me to take steps toward becoming the person I want to be. You are exactly the teacher I needed. 
      </Text>
      
      <Box textAlign={'center'}>
        <Image
          borderRadius={'full'}
          borderColor='green.400'
          boxSize='150px'
          src={
            '/images/afzal.jpg'
          }
          mb={2}
        />
        
        <Text fontWeight={600} color={'green.400'}>Afzal Peter</Text>
        <Text fontSize={'sm'} color={useColorModeValue('blue.400', 'gray.400')}>
          Student
        </Text>
      </Box>
    </Stack>
  );
}