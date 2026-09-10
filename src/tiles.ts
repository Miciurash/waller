export const Tile = {
  Empty: 0,
  Dirt: 1,
  Crate: 2,
  Bridge: 3,
} as const;

export type WeaponId = "wall" | "bridge" | "blast";

export const weapons: {
  id: WeaponId;
  name: string;
  hint: string;
  color: string;
}[] = [
  { id: "wall", name: "WALLER", hint: "crate wall", color: "#d2a15a" },
  { id: "bridge", name: "BRIDGER", hint: "platform", color: "#c9a227" },
  { id: "blast", name: "BLASTER", hint: "spray / break", color: "#e2c14a" },
];

export function isSolid(tile: number): boolean {
  return tile === Tile.Dirt || tile === Tile.Crate;
}

export function isPlatform(tile: number): boolean {
  return tile === Tile.Bridge;
}

export function isBreakable(tile: number): boolean {
  return tile === Tile.Crate || tile === Tile.Bridge;
}
