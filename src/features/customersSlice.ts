import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICustomer {
    id: string;
    name: string;
    food: string[];
}

interface IFood {
    id: string,
    food: string
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
        addFoodToCustomer: (state, action: PayloadAction<IFood>) => {
            state.value.filter((customer)=>{
                if (customer.id==action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            });
        },
    }
});

export const { addCustomer, addFoodToCustomer } = customersSlice.actions;

export default customersSlice.reducer;

