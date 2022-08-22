import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../app/apiService";


const initialState = {
    isLoading: false,
    error: null,
    listMusic: [],
    musicPlaying: {},
};

const slice = createSlice({
    name: "music",
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        getListMusicSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.listMusic = action.payload.products;
        },
        // playMusicSuccess(state, action) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.musicPlaying = action.payload;
        // },
    }
})


export default slice.reducer;

export const getListMusic = () => async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
        const response = await apiService.get(`/products`);
        dispatch(slice.actions.getListMusicSuccess(response.data));
    } catch (error) {
        dispatch(slice.actions.hasError(error.message));
        toast.error(error.message);
    }
};

// export const playMusic = (song) => async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//         dispatch(slice.actions.playMusicSuccess(song));
//     } catch (error) {
//         dispatch(slice.actions.hasError(error.message));
//         toast.error(error.message);
//     }
// };
