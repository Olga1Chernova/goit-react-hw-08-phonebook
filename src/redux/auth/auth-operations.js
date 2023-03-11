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

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const data = await api.getCurrentUsers(auth.token);
            return data;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.logOut();
            return data;
        }
        catch ({response}) {
            return rejectWithValue(response);
        }
    }
)
