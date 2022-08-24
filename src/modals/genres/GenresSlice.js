import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../../app/apiService";

const initialState = {
  isLoading: false,
  error: null,
  isAddCategory: false,
  categories: [],
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getListcategoriesSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload.categories;
    },
  },
});

export default slice.reducer;

export const getListCategories = () => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await apiService.get(`/categories`);
    dispatch(slice.actions.getListcategoriesSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
  }
};
