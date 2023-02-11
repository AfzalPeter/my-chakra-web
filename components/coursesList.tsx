"use client"

import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';



const CoursesList = () => {
    return (

        <Container maxW={'100%'} p="12" bgGradient='linear(to-r, gray.50, yellow.50, pink.50)'>
            <Heading textAlign={'center'} as="h1">Core Courses</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display={{md:'flex'}}
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display={{md:"flex"}}
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    '/images/block.webp'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>

                    <Heading as='h4' margin={'3'}>
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            Common in All Specializations:
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        Every participant of the program will start by completing the following three core courses:
                    </Text>
                    <Heading margin={'3'} color={'green.400'} fontSize={'xl'}>Quarter I (Core)</Heading>
                    <Text>CS-101: Object-Oriented Programming using TypeScript</Text>
                    <Heading margin={'3'} color={'green.400'} fontSize={'xl'}>Quarter II (Core)</Heading>
                    <Text>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
                    <Heading margin={'3'} color={'green.400'} fontSize={'xl'}>Quarter III (Core)</Heading>
                    <Text>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>


                </Box>
            </Box>

            <Divider marginTop="5" />
            <Box margin={'2'} textAlign='center'>
                <Heading as="h2" padding="3">
                    Specialized Tracks:
                </Heading>
                <Text padding='2' >After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
            </Box>

            <HStack display={{md:'flex'}} margin={{md:'4', sm:'1'}} spacing="2" align={'center'} padding={{md:'4', sm:'1'}}>
                <Box margin={{md:'4', sm:'1'}}  borderRadius='xl' padding={{md:'4', sm:"1"}} w={{md:'30%', sm:'100%'}} height={'container.md'} bg='gray.100'>
                    <Image
                        borderRadius="lg"
                        src={
                            '/images/Blockchain.png'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                    <Heading margin={'2'} fontSize='xl'> Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                    <Text as="p" fontSize="sm" marginTop='2'>
                        This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter IV
                    </Heading>
                    <Text as={'p'}>
                        W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter V
                    </Heading>
                    <Text>
                        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                    </Text>
                </Box>

                <Box margin={{md:'4', sm:'1'}}  borderRadius='xl' padding={{md:'4', sm:"1"}} w={{md:'30%', sm:'100%'}} height={'container.md'} bg='gray.100'>
                    <Image
                        borderRadius="lg"
                        src={
                            '/images/artif.jpg'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                    <Heading margin={'2'} fontSize='xl'> Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
                    <Text as="p" fontSize="sm" marginTop='2'>
                        The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter IV
                    </Heading>
                    <Text as={'p'}>
                        AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter V
                    </Heading>
                    <Text>
                        AI-361: Deep Learning and MLOps
                    </Text>
                </Box>

                <Box margin={{md:'4', sm:'1'}}  borderRadius='xl' padding={{md:'4', sm:"1"}} w={{md:'30%', sm:'100%'}} height={'container.md'} bg='gray.100'>
                    <Image
                        borderRadius="lg"
                        src={
                            '/images/cloud.jpg'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                    <Heading margin={'2'} fontSize='xl'> Cloud-Native Computing Specialization</Heading>
                    <Text as="p" fontSize="sm" marginTop='2'>
                        The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter IV
                    </Heading>
                    <Text as={'p'}>
                        CN-351: Certified Kubernetes Application Developer (CKAD)
                    </Text>
                    <Heading margin={'2'} color={'green.400'} fontSize={'lg'}>
                        Quarter V
                    </Heading>
                    <Text>
                        CN-361: Developing Multi-Cloud APIs using CDK for Terraform
                    </Text>
                </Box>
            </HStack>
            <Box margin={'2'} textAlign='center'>
                <Heading fontSize={'xl'} padding="3">
                    The Outcome for Participants of the Program
                </Heading>
                <Text padding='2' as="p" fontSize="sm" marginTop='2' >
                    The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
                </Text>
            </Box>
            <Divider marginTop="5" />
        </Container>
    );
};

export default CoursesList;