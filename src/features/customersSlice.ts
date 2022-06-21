import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICustomer {
    id: string;
    name: string;
    food: string[];
}

interface ICustomerState {
    value: ICustomer[]
}
const initialState: ICustomerState = {
    value: []
};
export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<ICustomer> ) => {
            state.value.push(action.payload);
        },
        // removeCustomer: (state, action: PayloadAction<number>) => {
        //     state.value.splice(action.payload,1);
        // },
    }
});

export const { addCustomer } = customersSlice.actions;

export default customersSlice.reducer;

