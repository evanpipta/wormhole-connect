import { Network as Environment, CONTRACTS } from '@certusone/wormhole-sdk';
import { WormholeConfig, Context, ChainConfig, Contracts } from '../types';

// https://book.wormhole.com/reference/contracts.html
export const MAINNET_CHAINS = {
  solana: 1,
  ethereum: 2,
  bsc: 4,
  polygon: 5,
  avalanche: 6,
  fantom: 10,
  celo: 14,
  moonbeam: 16,
} as const;

export type MainnetChainName = keyof typeof MAINNET_CHAINS;
export type MainnetChainId = (typeof MAINNET_CHAINS)[MainnetChainName];

export type ChainContracts = {
  [chain in MainnetChainName]: Contracts;
};

const MAINNET: { [chain in MainnetChainName]: ChainConfig } = {
  ethereum: {
    key: 'ethereum',
    id: 2,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.ethereum,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 15,
  },
  solana: {
    key: 'solana',
    id: 1,
    context: Context.SOLANA,
    contracts: CONTRACTS.MAINNET.solana,
    finalityThreshold: 32,
  },
  polygon: {
    key: 'polygon',
    id: 5,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.polygon,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 512,
  },
  bsc: {
    key: 'bsc',
    id: 4,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.bsc,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 15,
  },
  avalanche: {
    key: 'avalanche',
    id: 6,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.avalanche,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 15,
  },
  fantom: {
    key: 'fantom',
    id: 10,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.fantom,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 1,
  },
  celo: {
    key: 'celo',
    id: 14,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.celo,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 1,
  },
  moonbeam: {
    key: 'moonbeam',
    id: 16,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.moonbeam,
      relayer: '0x461a8878060aa45fa685732bff654ca1fdef2830',
    },
    finalityThreshold: 1,
  },
};

const env: Environment = 'MAINNET';
const MAINNET_CONFIG: WormholeConfig = {
  env,
  rpcs: {
    ethereum: 'https://rpc.ankr.com/eth',
    solana: 'https://api.mainnet-beta.solana.com',
    polygon: 'https://rpc.ankr.com/polygon',
    bsc: 'https://bscrpc.com',
    avalanche: 'https://rpc.ankr.com/avalanche',
    fantom: 'https://rpc.ankr.com/fantom',
    celo: 'https://rpc.ankr.com/celo',
    moonbeam: 'https://rpc.ankr.com/moonbeam',
  },
  chains: MAINNET,
};

export default MAINNET_CONFIG;
