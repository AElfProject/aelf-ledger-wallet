import AElf from "aelf-sdk";
import { useAElf } from "@/hooks/useAElf";
import { SMART_CONTRACT_ADDRESS_MAINCHAIN } from '@/utils/constants';
import useSWR from "swr";

const viewWallet = AElf.wallet.createNewWallet();

export const useMultiTokenContract = () => {
  const aelf = useAElf();

  return useSWR([aelf, "multiTokenContract"], async () => {
    const tokenContractAddress = SMART_CONTRACT_ADDRESS_MAINCHAIN;
    const multiTokenContract = await aelf.chain.contractAt(
      tokenContractAddress,
      viewWallet
    );

    return {
      multiTokenContract,
      tokenContractAddress,
    };
  });
};
