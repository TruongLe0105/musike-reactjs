import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../modals/ModalSlice';
import categoriesReducer from "../modals/genres/GenresSlice";
import musicReducer from "../modals/music/MusicSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        categories: categoriesReducer,
        listMusic: musicReducer,
    }
})