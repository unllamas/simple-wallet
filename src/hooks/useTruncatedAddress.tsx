export default function useTruncatedAddress(address: string): string {
  const truncated = `${address?.substring(0, 4)}...${address?.substring(address.length - 3, address.length)}`;

  return truncated;
}
