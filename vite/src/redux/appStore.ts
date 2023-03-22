import prepare from "./prepareStore";
import store from "./store";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof prepare.reducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;