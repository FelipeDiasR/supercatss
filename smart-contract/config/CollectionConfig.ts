import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import { ethereumTestnet, ethereumMainnet } from "../lib/Networks";
import { openSea } from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "Supersupercats",
  tokenName: "Super Super Cats",
  tokenSymbol: "SSCA",
  hiddenMetadataUri: "ipfs://QmRfYsQLFxiWZwWgcBxdrW68JHzkHLish5PWzfD82J17yK/hidden.json",
  maxSupply: 43,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xB59E1a37b7411C7b6894fa68dD7a3509d7392dFA",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
