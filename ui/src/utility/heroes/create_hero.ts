import { Transaction } from "@mysten/sui/transactions";

export const createHero = (
  packageId: string,
  name: string,
  imageUrl: string,
  power: string,
) => {
  const tx = new Transaction();

  // TODO: Add moveCall to create a hero
  // Function: `${packageId}::hero::create_hero`
  // Arguments: name (string), imageUrl (string), power (u64)
    // Hints:
    // Use tx.pure.string() for string arguments
    // Use tx.pure.u64() for number arguments (convert power to BigInt)
  tx.moveCall({
    target: `${packageId}::hero::create_hero`,
    arguments: [
      tx.pure.string(name),
      tx.pure.string(imageUrl),
      tx.pure.u64(BigInt(Math.floor(Number(power) * 1_000_000_000))) // safeguard if power given as SUI-like number
    ],
  });

  return tx;
};
