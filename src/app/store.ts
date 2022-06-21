import { configureStore } from "@reduxjs/toolkit";
import reservationsSlice from "../features/reservationsSlice";
import customersSlice from "../features/customersSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsSlice,
        customers: customersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;