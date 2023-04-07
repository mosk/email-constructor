/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const structuresSlice = createSlice({
  name: "defaultRows",
  initialState: [
    {
      columns: [{ type: 1 }],
    },
    {
      columns: [{ type: 2 }, { type: 3 }],
    },
    {
      columns: [{ type: 4 }, { type: 5 }, { type: 6 }],
    },
    {
      columns: [{ type: 7 }, { type: 8 }, { type: 9 }, { type: 10 }],
    },
  ],
  reducers: {
    addRow: (state, action) => {
      state.rows = [...state.rows, { id: uuid(), ...action.payload }];
    },
  },
});
