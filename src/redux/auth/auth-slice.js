import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, current, logOut } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase(signUp.fulfilled, (state, {payload}) => {
               const { user, token } = payload;
                state.loading = false;
                state.user = user;
                state.token = token;
                state.isLogin = true;
           }) 
             .addCase(signUp.rejected, (state, { payload }) => {
               state.loading = false;
               state.error = payload.data.message;
           })
        
        
           .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase(logIn.fulfilled, (state, {payload}) => {
               const { user, token } = payload;
                state.loading = false;
                state.user = user;
                state.token = token;
                state.isLogin = true;
           }) 
           .addCase(logIn.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
           }) 
        
        
           .addCase(current.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
             .addCase(current.fulfilled, (state, { payload }) => {
               state.loading = false;
               state.user = payload;
               state.isLogin = true;
           }) 
           .addCase(current.rejected, (state, {payload}) => {
               state.loading = false;
               state.token = "";
               state.error = payload;
           }) 
        
        
           .addCase(logOut.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase(logOut.fulfilled, (state) => {
                state.loading = false;
                state.user = {};
                state.token = "";
                state.isLogin = false;
           }) 
           .addCase(logOut.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
           }) 
    }
})

export default authSlice.reducer;