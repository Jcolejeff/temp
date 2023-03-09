import { configureStore } from "@reduxjs/toolkit";
import siderbarReducer from "./slices/sidebar/sidebarSlice";
import userReducer from "./slices/user/userSlice";
export const store = configureStore({
	reducer: {
		sidebar: siderbarReducer,
		user: userReducer,
	},
});
