import { BigNumber, ethers } from 'ethers';

export default function bigNumberTokenToString(bigNumber: BigNumber): string {
  return ethers.utils.formatEther(bigNumber);
}
