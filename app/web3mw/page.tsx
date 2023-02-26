"use client"

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Grid,
  GridItem,
} from '@chakra-ui/react';



export default function Simple() {
  return (
    <>

      <Container maxW={'7xl'} margin={'3'}>
        <Heading
          color={'gray.800'}
          py={{ base: 6, md: 6 }}
          textAlign={'center'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
          Web 3 and Metaverse Specialization
        </Heading>
        <Text
          color={'gray.700'}
          textAlign={'center'}
          fontWeight={300}
          fontSize={'xl'}>
          all three Quauters and same in all courses.
        </Text>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 6 }}
          py={{ base: 18, md: 6 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                '/images/block.webp'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                color={'green.400'}
                // lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Quarter-IV
              </Heading>

            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>

                <Text fontSize={'lg'}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
                <Text fontSize={'lg'}>Course Description:</Text>
                <Text fontSize={'sm'}>
                  In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                  https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'green.500'}
                  fontWeight={'600'}
                  textTransform={'uppercase'}

                  mb={'4'}>
                  Course Outline:
                </Text>
                <List spacing={4} >
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Blockchain and Metaverse Theory:
                    </Text>
                    <Text>The Metaverse: And How It Will Revolutionize Everything by Matthew Ball</Text>
                    <Text>Mastering Blockchain - Fourth Edition by Imran Bashir</Text>
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'semibold'}>
                      Smart Contract Development in Solidity
                    </Text>
                    <Text>Solidity Programming Essentials - Second Edition By Ritesh Modi</Text>
                    <Text>Solidity Learning Repo</Text>
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dapp Development using Ethers.js and Next.js 13
                    </Text>
                    <Text>Dapp Learning Repo</Text>
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Tokennomics
                    </Text>
                  </ListItem>
                </List>

              </Box>

            </Stack>


          </Stack>
        </SimpleGrid>

        <Box>
          <Text
            fontSize={{ base: '16px', lg: '18px' }}
            color={'green.500'}
            fontWeight={'600'}
            textTransform={'uppercase'}
            mb={'4'}>
            Blockchain Project:
          </Text> <p>Create a Token and Launch ICO/IEO/IDO</p>
          <Text fontSize={'sm'}>As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects  https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects, and you'll notice that blockchain projects absolutely dominate the list.</Text>

          <List spacing={4}>
            <ListItem padding={'2'}>
              <Text as={'span'} fontWeight={'bold'}>
                Understand the difference between IDO vs. IEO vs. ICO
              </Text>{' '}
              https://phemex.com/blogs/what-is-a-dex-ido
              <Text fontSize={'sm'}>
                ICO list at ICO Drops https://icodrops.com
                ICO List of Best New Initial Coin Offerings https://topicolist.com/
                Top-Rated Crypto Token Sales: https://cryptototem.com/ico-list/
                ICO List Online https://www.icolistingonline.com
                Binance IEO List https://coincodex.com/ieo-list/binance/
                Binance Launchpad https://www.coinspeaker.com/ieo/platform/binance-launchpad/
                IEO List https://icomarks.com/ieo
                Polkastarter https://polkastarter.com
              </Text>
            </ListItem>
          </List>

        </Box>



        <Grid

          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={4}
        >
          {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}

          <GridItem>
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}> Project Part 1 </Text>
              <Text>How to Launch a IEO on Binance Launchpad</Text>
              <br />
              <Text fontSize={'sm'}>Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo/
                Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04 Note: Also document the alternatives to Binance Launchpad.</Text>
            </Box>
          </GridItem>

          <GridItem >
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}> Project Part 2:  </Text>
              <Text>How to Launch a IDO on Polkastarter</Text>
              <br />
              <Text fontSize={'sm'}>
                Review the [list of top fundraising platforms https://cryptorank.io/fundraising-platforms
                Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/ .</Text>
            </Box>
          </GridItem>

          <GridItem >
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}>Project Part 3:</Text>
              <Text>Create a Pako Token</Text>
              <Text fontSize={'sm'}> By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.
                Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).
                Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development..</Text>
            </Box>
          </GridItem>

          <GridItem colSpan={1} >
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}> Project Part 4: </Text>
              <Text>Develop Crowd Sale Contract</Text>
              <br />
              <Text fontSize={'sm'}> This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                Implement a payable buyToken() function.
                Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                You can use the openzeppelin crowd sale contracts https://docs.openzeppelin.com/contracts/4.x/crowdsales however you will have to update the code to the latest solidity version.
                Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                Note: Before you get started writing the token contract we suggest you review the access control
                https://docs.openzeppelin.com/contracts/4.x/access-control.</Text>
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}>Project Part 5:</Text>
              <Text>Trying it with MetaMask</Text>
              <br />
              <Text fontSize={'sm'}>While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                When it's done, take note of what addresses the contracts were uploaded to and copy it!
                Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                To do this, open the side menu and click on the "Add token" button to get started:
                Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.
                After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!.</Text>
            </Box>
          </GridItem>

          <GridItem >
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}> Project Part 6:</Text>
              <Text>Trying it with Multisignature Wallets</Text>
              <br />
              <Text fontSize={'sm'}>
                Read https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                Now use Gnosis Safe] https://gnosis-safe.io/ with multi-sigs to do what you did in the last part.
                .</Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}>Project Part 7: </Text>
              <Text>Sending Tokens using Ethers.js</Text>
              <br />
              <Text fontSize={'sm'}>
                Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                You may follow this tutorial https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                .</Text>
            </Box>
          </GridItem>

          <GridItem >
            <Box h={'full'} padding={'2'} bg={'gray.100'} color={'gray.800'} border={'2px'} borderRadius={'20px'} w={'100%'} textAlign={'center'}>
              <Text bg={'green.500'} color={'white'} fontWeight={'bold'}>Project Part 8 Advance:</Text>
              <Text>Create, Deploy, Mint, and Sell an NFT</Text>
              <Text fontSize={'sm'}>
                Read this NFT tutorial series https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                Create a NFT contract using the [OpenZepplen ERC721 NFT Standard https://docs.openzeppelin.com/contracts/4.x/erc721
                You may use the Preset ERC721 contract https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
                Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace https://opensea.io/  for sale.
                Implement a ERC721 Market https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                .</Text>
            </Box>
          </GridItem>
        </Grid>




        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}>
          Apply Now
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>

          <Text>Duration: 13 Weeks</Text>
        </Stack>
      </Container>

    </>
  );
}