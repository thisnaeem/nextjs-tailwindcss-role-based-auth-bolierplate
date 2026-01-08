import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User, Role } from "@/types";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoading: true,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        updateUserRole: (state, action: PayloadAction<Role>) => {
            if (state.user) {
                state.user.role = action.payload;
            }
        },
    },
});

export const { setUser, setLoading, logout, updateUserRole } = authSlice.actions;
export default authSlice.reducer;
