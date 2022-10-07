import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tower } from "../interfaces";
import { towers } from "../../data/towers";

// Define a type for the slice state
interface HandSlice {
  deck: Tower[];
  hand: Tower[];
}

// Define the initial state using that type
const initialHandSlice: HandSlice = {
  deck: towers,
  hand: [],
};

export const handSlice = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialHandSlice,
  reducers: {
    stole: (state) => {
      state.hand.push(state.deck[0]);
      state.deck = state.deck.slice(1);
    },
    use: (state, action: PayloadAction<number>) => {
      state.hand = state.hand.filter((tower) => tower.id !== action.payload);
    },
  },
});

export const { stole, use } = handSlice.actions;

export default handSlice.reducer;
