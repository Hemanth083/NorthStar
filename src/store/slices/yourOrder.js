// yourOrder.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeData: [], // Initialize with an empty array
};

const CreateOrder = createSlice({
    name: 'order',
    initialState,
    reducers: {
        storeData: (state, action) => {
            state.storeData = action.payload; // Update the entire array with the payload
        },
    },
});

export const { storeData } = CreateOrder.actions;
export const selectedStorageData = (state) => state.order.storeData;
export default CreateOrder.reducer;

