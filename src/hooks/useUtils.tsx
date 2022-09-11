import { BigNumber, ethers } from 'ethers';

export default function bigNumberTokenToString(bigNumber: BigNumber, lenght: number): string {
  return Number(ethers.utils.formatEther(bigNumber)).toFixed(lenght);
}
