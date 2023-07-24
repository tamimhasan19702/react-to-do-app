import { createSlice } from "@reduxjs/toolkit";

export

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading:false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {

    }
})