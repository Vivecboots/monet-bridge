
// src/utils/web3Setup.ts
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { mainnet, arbitrum } from '@wagmi/core/chains';

const projectId: string = '908bf7041c8eb3e1df7c2d9140164ad3';
const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'monet-bridge' });

const web3Modal = createWeb3Modal({ wagmiConfig, projectId, chains });

export default web3Modal;
