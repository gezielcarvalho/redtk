import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IReservationState {
    value: string[]
}
const initialState: IReservationState = {
    value: []
};
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string> ) => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload,1);
        },
    }
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;

