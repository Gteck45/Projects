import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
export const fetchPasswords = createAsyncThunk(
  'passwords/fetchPasswords',
  async () => {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    return data;
  }
);

const initialState = {
    passwords: [
        {},
    ],
}


export const passSlice = createSlice({
    name:"PassSlice",
    initialState,
    reducers:{},
     extraReducers: (builder) => {
    builder
      .addCase(fetchPasswords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPasswords.fulfilled, (state, action) => {
        state.loading = false;
        state.passwords = action.payload;
      })
      .addCase(fetchPasswords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})
export const { allPass} = passSlice.actions;
export default passSlice.reducer;