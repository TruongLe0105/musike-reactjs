import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModalNextSong: false,
};


const slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        getInfoModal(state, action) {
            state.openModalNextSong = action.payload;
        },
    }
});

export default slice.reducer;

export const getInfoModalNextSong = (boolean) => async (dispatch) => {
    dispatch(slice.actions.getInfoModal(boolean))
}