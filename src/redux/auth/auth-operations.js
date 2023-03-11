import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "shared/services/auth-api";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signUp(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const logIn = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.logIn(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)


