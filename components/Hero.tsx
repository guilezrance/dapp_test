import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';
import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';

export const Hero = () => {
  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        4000 upgradables Tigers who making their laws in the{' '}
        <Text
          as="a"
          color="elvenTools.color3.base"
          href="http://ec2-107-23-112-238.compute-1.amazonaws.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Jungleverse
        </Text>{' '}
        of{' '}
        <Text
          as="a"
          color="elvenTools.color2.base"
          href="https://www.elrond.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Elrond
        </Text>{' '}
        network.
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        The Tigers On Chain are humanitys last tribe of tigers ! After decades of exploration in the jungle, they have finally found access to the Jungleverse but beware ! After too much time spent in the Jungleverse they will turn into zombie tigers…! You can claim the “Feeszer” vaccine for free to transform yourself into unique Zombie Tigers. The choice is yours ! You are free to choose whether you become a Zombie Tiger or remain an original Tiger! The TigersDAO will take care of always giving more value to your Tigers On Chain. Become a Tigers On Chain and explore the Jungleverse before the others !
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CollectionInfoBox
          content={collectionTicker}
          label="Collection ticker. Click for details."
          href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={shortenHash(smartContractAddress, 12)}
          label={`Minter smart contract. Click for details.`}
          href={`${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`}
        />
        <CollectionInfoBox content={collectionSize} label="Collection amount" />
      </Box>
    </Box>
  );
};
