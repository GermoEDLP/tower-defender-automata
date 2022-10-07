import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Player, Tower } from "../interfaces";

// Define the initial state using that type
const initialPlayerState: Player = {
  id: 1,
  name: "Player 1",
  health: 10,
  cristals: 3,
};

export const playerSlice = createSlice({
  name: "player",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialPlayerState,
  reducers: {
    reduceHealth: (state, action: PayloadAction<number>) => {
      state.health -= action.payload;
    },
    incrementHealth: (state, action: PayloadAction<number>) => {
      state.health += action.payload;
    },
    reduceCristals: (state, action: PayloadAction<number>) => {
      state.cristals -= action.payload;
    },
    incrementCristals: (state, action: PayloadAction<number>) => {
      state.cristals += action.payload;
    },
  },
});

export const {
  reduceCristals,
  reduceHealth,
  incrementCristals,
  incrementHealth,
} = playerSlice.actions;

export default playerSlice.reducer;
