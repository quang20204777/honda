import { createSlice } from "@reduxjs/toolkit"
import React from "react"
import { speVerhicleData } from "../data/speVerhicleData.js"

const speVerhicleSlice = createSlice( {
    name: "speVerhicle",
    initialState: speVerhicleData,
    reducers: {
        deleteXCD: (state, action) => {
            const {id} = action.payload
            const ds = state.find(xcd => xcd.id === id)
            if (ds) return state.filter(xcd => xcd.id !== id )
        },

        addXCD: (state, action) => {
            state.push(action.payload)
        },

        editXCD: (state, action) => {
            const {id, name, numberCode, typeXCD, location, own, stateXCD} = action.payload;
            const ds = state.find(xcd => xcd.id === id);
            if (ds) {
                ds.name= name
                ds.numberCode= numberCode
                ds.typeXCD= typeXCD
                ds.location= location
                ds.own= own
                ds.stateXCD= stateXCD
            }
        }
    }
})
export const {deleteXCD, addXCD, editXCD} = speVerhicleSlice.actions
export default speVerhicleSlice.reducer;