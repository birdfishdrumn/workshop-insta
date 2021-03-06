import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';



export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbar:{
        state: false,
    text: ""
    }
  },
  reducers: {

     snackbarOpenAction: (state,action) => {
      state.snackbar.text = action.payload;
      state.snackbar.state = true;
  // state.snackbar.text = "snackbar...";
    },
    snackbarCloseAction:state=> {
      state.snackbar.text = "";
      state.snackbar.state = false;
  // state.snackbar.text = "";
    },


  },
});

export const {snackbarOpenAction,snackbarCloseAction} = snackbarSlice.actions;
// snackbarの中にsnackbarというオブジェクトが入っている。stateはinitialState,snackbarはname:"snackbar"に該当する。
export const getSnackbarState = (state: RootState )=> state.snackbar.snackbar.state;

export const getSnackbarText = (state: RootState )=> state.snackbar.snackbar.text;

// export const getsnackbarname = createSelector(
//   [selectsnackbar],
//   state => state.snackbarname
// )

export default snackbarSlice.reducer
