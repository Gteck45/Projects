import { configureStore } from "@reduxjs/toolkit";
import  PassSliceReducer from "./slice/PassSlice";
export const store =configureStore({
    reducer:{
        passwords: PassSliceReducer,
    }
})
