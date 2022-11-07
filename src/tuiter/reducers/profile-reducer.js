import {createSlice} from "@reduxjs/toolkit";
import user from "../data/profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: user,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
        updateBio(state, action) {
            state.bio = action.payload;
        },
        updateLocation(state, action) {
            state.location = action.payload;
        },
        updateWebsite(state, action) {
            state.website = action.payload;
        },
        updateDob(state, action) {
            state.dateOfBirth = action.payload;
        }
    }
});
export const {
    updateName,
    updateBio,
    updateLocation,
    updateWebsite,
    updateDob
} = profileSlice.actions;
export default profileSlice.reducer;