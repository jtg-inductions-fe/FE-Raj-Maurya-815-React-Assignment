import { configureStore } from '@reduxjs/toolkit';
import { github } from '@services';

export const appStore = configureStore({
    reducer: {
        [github.reducerPath]: github.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(github.middleware),
});
