import { combineReducers } from 'redux';
import { settingsSlice } from '../slices/settings-slice';
import { contentSlice } from '../slices/content-slice';
import { structuresSlice } from '../slices/structures-slice';

export default combineReducers({
  emailSettings: settingsSlice.reducer,
  emailContent: contentSlice.reducer,
  emailStructures: structuresSlice.reducer,
});
