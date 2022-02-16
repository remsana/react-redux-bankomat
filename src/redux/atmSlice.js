import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    showAtm: false,
    balance: 1000,
    status: null,
  },
  reducers: {
    showHideAtm: (state) => {
      state.showAtm = !state.showAtm;
    },
    withdrawMoney: (state, action) => {
        //action.payload becomes undefined when the input is zero so used that in the condition below
        if (state.balance >= action.payload && action.payload > 0) {
            state.balance -= action.payload;
            state.status = `You have withdrawn ${action.payload} SEK`;
          } else if (action.payload < 0 || action.payload == undefined) {
            state.status = "Invalid Amount. Please enter a valid amount!";          
          } else {
            state.status = `You do not have enough balance to withdraw ${action.payload} SEK. Please deposit!`;
          }
    },
    depositMoney: (state, action) => {
        if (action.payload < 0 || action.payload == undefined) {
            state.status = "Invalid Amount. Please enter a valid amount!";
          } else if (action.payload > 0) {
            state.balance += action.payload;
            state.status = `You have deposited ${action.payload} SEK`;
          } else {
            state.status = null;
          }
    
    },
  },
});

export const { showHideAtm, withdrawMoney, depositMoney } = atmSlice.actions;
export default atmSlice.reducer;
