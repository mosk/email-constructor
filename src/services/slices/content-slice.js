/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    rows: [],
  },
  reducers: {
    addRow: (state, action) => {
      state.rows = [...state.rows, { id: uuid(), ...action.payload }];
    },
    reorderRow: (state, action) => {
      const rows = [...state.rows];

      const draggedNumber = rows
        .map((row, i) => (row.id === action.payload.from ? i : null))
        .filter((row) => row !== null)[0];
      const hoveredNumber = rows
        .map((row, i) => (row.id === action.payload.to ? i : null))
        .filter((row) => row !== null)[0];

      rows[hoveredNumber] = rows.splice(draggedNumber, 1, rows[hoveredNumber])[0];

      state.rows = [...rows];
    },
    addContent: (state, action) => {
      const rowID = action.payload.id.split(`_`)[0];
      const columnID = action.payload.id.split(`_`)[1];
      const row = [...state.rows].find((item) => item.id === rowID);
      const content = row.columns[columnID].content;

      const contentItem = {
        id: uuid(),
        type: action.payload.item.type,
      };

      if (content) {
        row.columns[columnID] = {
          ...row.columns[columnID],
          content: [...content, contentItem],
        };
      } else {
        row.columns[columnID] = {
          ...row.columns[columnID],
          content: [contentItem],
        };
      }
    },
  },
});
