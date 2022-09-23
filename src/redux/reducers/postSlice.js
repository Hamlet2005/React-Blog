import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const getPosts = createAsyncThunk(
    'posts/get',
    async (_, thunkApi) => {
        try{
            const response = await axios.get('http://localhost:5000/posts')
            return response.data
        } catch (e){
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const addPosts = createAsyncThunk(
    'posts/add',
    async ({title, description, date}, thunkApi) => {
        try{
            const response = await axios.post('http://localhost:5000/posts', {title, description, date})
            return response.data
        } catch (e){
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getPosts.pending.type]: (state) => {
            state.isLoading = true
        },
        [getPosts.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getPosts.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        }
    }
})

export default postsSlice.reducer