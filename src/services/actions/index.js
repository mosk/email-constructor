import { settingsSlice } from "../slices/settings-slice";
import { contentSlice } from "../slices/content-slice";

export const settingsActions = settingsSlice.actions;
export const { addRow, reorderRow, addContent } = contentSlice.actions;
