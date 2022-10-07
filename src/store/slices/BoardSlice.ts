import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tower } from "../interfaces";

// Define a type for the slice state
interface BoardState {
  board: [Tower | null, Tower | null, Tower | null, Tower | null];
}

// Define the initial state using that type
const initialBoardState: BoardState = {
  board: [null, null, null, null],
};

export const boardSlice = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialBoardState,
  reducers: {
    makeDamageToTower: (
      state,
      action: PayloadAction<{ indice: number; damage: number }>
    ) => {
      if (state.board[action.payload.indice] !== null) {
        const tower = state.board[action.payload.indice];
        if (tower) {
          tower.health -= action.payload.damage;
          if (tower.health <= 0) tower.destroyed = true;
        }
      }
    },
    locate: (
      state,
      action: PayloadAction<{ indice: number; tower: Tower }>
    ) => {
      state.board[action.payload.indice] = action.payload.tower;
    },
    recoveryTower: (state, action: PayloadAction<{ indice: number }>) => {
      if (state.board[action.payload.indice] !== null) {
        const tower = state.board[action.payload.indice];
        if (tower) {
          tower.destroyed = false;
          tower.health = tower.initialHealth;
        }
      }
    },
  },
});

export const { makeDamageToTower, locate, recoveryTower } = boardSlice.actions;

export default boardSlice.reducer;
