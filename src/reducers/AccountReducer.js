import { createSlice } from "@reduxjs/toolkit";
import { accountData } from "../data/accountData.js";

const accountSlice = createSlice({
  name: "scanner",
  initialState: accountData,
  reducers: {
    addAccount: (state, action) => {
      state.push(action.payload);
    },

    deleteAccount: (state, action) => {
      const ds = state.find((scanner) => scanner.id === action.payload.id);

      if (ds) {
        return state.filter((f) => f.id !== action.payload.id);
      }
    },

    editAccount: (state, action) => {
      const {
        id,
        name,
        phoneNumber,
        email,
        role,
        stateAccount,
        birthDay,
        wareHouse,
      } = action.payload;
      const ds = state.find((account) => account.id === id);
      if (ds) {
        ds.name = name;
        ds.phoneNumber = phoneNumber;
        ds.email = email;
        ds.role = role;
        ds.stateAccount = stateAccount;
        ds.birthDay = birthDay;
        ds.wareHouse = wareHouse;
      }
    },
  },
});

export const { addAccount, deleteAccount, editAccount } = accountSlice.actions;
export default accountSlice.reducer;
