import { createSlice } from "@reduxjs/toolkit";
import { scannerData } from "../data/scannerdata.js";

const scannerSlice = createSlice({
    name: "scanner",
    initialState: scannerData,
    reducers: {
        addScanner: (state, action) => {
            state.push(action.payload)
        },

        deleteScanner: (state, action) => {
            const ds = state.find(scanner => scanner.id === action.payload.id);

            if (ds) {
                return state.filter(f => f.id !== action.payload.id)
            }
        },

        editScanner: (state, action) => {
            const {id, name, type, address, stateScanner, location, numberCode} = action.payload
            const ds = state.find(scanner => scanner.id === id);
            if (ds) {
                ds.name = name
                ds.type=type
                ds.address=address
                ds.stateScanner=stateScanner
                ds.location=location
                ds.numberCode=numberCode
            }
        }

    }
})

export const {addScanner, deleteScanner, editScanner} = scannerSlice.actions;
export default scannerSlice.reducer;
