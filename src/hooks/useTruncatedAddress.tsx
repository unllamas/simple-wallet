export default function useTruncatedAddress(address: string): string {
  if (address) {
    const truncated = `${address?.substr(0, 5)}...${address?.substr(-4)}`;

    return truncated;
  }
}
