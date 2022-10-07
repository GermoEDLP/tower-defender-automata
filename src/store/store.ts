import { configureStore } from "@reduxjs/toolkit";
import { handSlice, roadSlice } from "./slices";
import { boardSlice } from "./slices/BoardSlice";
import { playerSlice } from "./slices/PlayerSlice";
// ...

export const store = configureStore({
  reducer: {
    road: roadSlice.reducer,
    board: boardSlice.reducer,
    hand: handSlice.reducer,
    player: playerSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
