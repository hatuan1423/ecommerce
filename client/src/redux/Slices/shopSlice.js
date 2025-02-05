import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopId: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    status: "",
    verify: "",
    token: ""
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        login(state, action) {
            const {
                _id = "",
                firstName = "",
                lastName = "",
                dateOfBirth = "",
                gender = "",
                email = "",
                status = "",
                verify = "",
                token = ""
            } = action.payload

            state.shopId = _id
            state.lastName = lastName
            state.firstName = firstName
            state.dateOfBirth = dateOfBirth
            state.gender = gender
            state.email = email
            state.email = email
            state.status = status
            state.verify = verify
            state.token = token
        },
        logout(state, action) {

        }
    },
});

export const { login, logout } = shopSlice.actions

export default shopSlice.reducer;
