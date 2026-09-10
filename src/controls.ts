export type Controls = {
  move: number;
  jump: boolean;
  fireHeld: boolean;
  fireJust: boolean;
  weapon: number;
  aimX: number;
  aimY: number;
};

export function emptyControls(): Controls {
  return {
    move: 0,
    jump: false,
    fireHeld: false,
    fireJust: false,
    weapon: 0,
    aimX: 0,
    aimY: 0,
  };
}
