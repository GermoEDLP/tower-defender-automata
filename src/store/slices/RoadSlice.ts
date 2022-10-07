import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Ord } from "../interfaces";
import { ord_deck } from "../../data/ord";

// Define a type for the slice state
interface RoadState {
  deck: Ord[];
  road: [Ord | null, Ord | null, Ord | null, Ord | null];
  revelada: Ord | null;
}

// Define the initial state using that type
const initialRoadState: RoadState = {
  deck: ord_deck,
  road: [null, null, null, null],
  revelada: null,
};

export const roadSlice = createSlice({
  name: "road",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialRoadState,
  reducers: {
    revelar: (state, action: PayloadAction<Ord>) => {
      if (state.deck.length > 0) {
        state.deck.shift();
        state.revelada = action.payload;
      }
    },
    avanzar: (state) => {
      if (state.revelada) {
        state.road[0] = state.revelada;
        state.revelada = null;
      } else {
        for (let i = 0; i < state.road.length; i++) {
          if (state.road[i] && i !== state.road.length - 1) {
            state.road[i + 1] = state.road[i];
            state.road[i] = null;
            break;
          }
          if (i === state.road.length - 1) {
            state.road[i] = null;
            // Aca se produce el ataque al jugador
          }
        }
      }
    },
    makeDamageToOrd: (
      state,
      action: PayloadAction<{ indice: number; damage: number }>
    ) => {
      if (state.road[action.payload.indice] !== null) {
        const ord = state.road[action.payload.indice];
        if (ord) {
          ord.health -= action.payload.damage;
        }
      }
    },
  },
});

export const { revelar, avanzar, makeDamageToOrd } = roadSlice.actions;

export default roadSlice.reducer;
