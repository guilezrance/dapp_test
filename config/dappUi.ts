// This configuration file keeps all UI constants and settings

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Elven Tools NFT minter dapp demo - Elrond blockchain',
  description:
    'Open source Dapp template for the Elven Tools and Elrond blockchain. The actual working example is connected to the Elven Tools smart contract deployed on the Elrond blockchain devnet!',
  image: `${dappHostname}/og-image.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is an ESDT on Elrond?',
    answer:
      'ESDT stands for Elrond Standard Digital Token. Custom tokens at native speed and scalability, without ERC20. The Elrond network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all. In effect, this means that custom tokens are as fast and as scalable as the native EGLD token itself.',
  },
  {
    question: 'What is an NFT on Elrond?',
    answer:
      'The Elrond protocol introduces native NFT support by adding metadata and attributes on top of the already existing ESDT. This way, one can issue a semi-fungible token or a non-fungible token which is quite similar to an ESDT, but has a few more attributes, as well as an assignable URI. Once owning a quantity of a NFT/SFT, users will have their data store directly under their account, inside the trie.',
  },
  {
    question:
      'Why knowing the collection ticker and minter smart contract is essential?',
    answer:
      'It is crucial because these two prove that the NFTs come from a verified source. The NFT project should always show the collection ticker and minter smart contract to gain trust.',
  },
  {
    question: 'What is Elven Tools?',
    answer:
      'The Elven Tools is an open-source toolset including the CLI tool, Smart Contract for handling the NFT collections, and this dapp template. You can, of course, use each tool separately. But the CLI helps with smart contract deployments and the setup process. You can also interact with the smart contract using the CLI or even use it as a buyer.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q2 2022',
    points: [
      'Public sale: 3000 Tigers Price: 1 EGLD',
      '500 $TOC per tigers minted',
      'Buy back the floor price for the comunity',
      'Airdrop NFT surprise for holders',
    ],
  },
  {
    title: 'Q3 2022',
    points: [
      'Jungleverse V1',
      'Zombification in the Jungleverse',
      '$TOC Airdrop phase 2',
      'News partershhips with the comunity',
    ],
  },
  {
    title: 'Q4 2022',
    points: [
      'NFT Staking / $TOC Staking',
      'Junglelotery',
      '$TOC Airdrop phase 3',
      'Merchandising',
      'TigersDAO, sky is the limit!',
    ],
  },
];

export const team = [
  {
    name: 'Shere Khan',
    bio: 'Web designer and artist',
    imageUrl: '/orange.png',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.behance.net',
      'https://www.dribbble.com',
    ],
  },
  {
    name: 'Vitaly',
    bio: 'Smart Contract programmer',
    imageUrl: '/cheetah.png',
    socialMediaLinks: ['https://www.twitter.com', 'https://www.github.com'],
  },
  {
    name: 'Rajah',
    bio: 'Community relations and marketing',
    imageUrl: '/reptile.png',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.discord.com',
      'https://www.telegram.me',
      'https://www.medium.com',
    ],
  },
];
