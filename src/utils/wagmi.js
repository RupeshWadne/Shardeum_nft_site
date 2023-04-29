import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "@rainbow-me/rainbowkit";

const shardeum = {
  id: 8081,
  name: "Shardeum",
  network: "Shardeum Liberty 2.1",
  nativeCurrency: {
    decimals: 18,
    name: "Shardeum",
    symbol: "SHM",
  },
  iconUrl:
    "https://bafkreic7ujchsg65vi7b26vkititbq2k3fddwhcutq3fpmraxj4sfjhyli.ipfs.nftstorage.link",
  rpcUrls: {
    default: {
      http: ["https://liberty20.shardeum.org/"],
    },
    public: {
      http: ["https://liberty20.shardeum.org/"],
    },
  },
  testnet: true,
};

export const { chains, provider } = configureChains(
  [shardeum, polygonMumbai, sepolia],
  [
    alchemyProvider({ apiKey: "H-mBrJVCHnER5nnt8LBLZtyhNaQZwmxx" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "nft_alchemy_shardeum",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default wagmiClient;