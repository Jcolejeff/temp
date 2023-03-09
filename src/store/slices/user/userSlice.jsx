import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: "",
	userEmail: "",
	userLastName: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setName: (state) => {
			state.userName = "john";
		},
	},
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
