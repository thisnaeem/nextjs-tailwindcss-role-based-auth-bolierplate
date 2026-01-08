import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    sidebarOpen: boolean;
    theme: "light" | "dark" | "system";
    isLoading: boolean;
}

const initialState: UIState = {
    sidebarOpen: true,
    theme: "system",
    isLoading: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
        },
        setTheme: (state, action: PayloadAction<"light" | "dark" | "system">) => {
            state.theme = action.payload;
        },
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { toggleSidebar, setSidebarOpen, setTheme, setGlobalLoading } =
    uiSlice.actions;
export default uiSlice.reducer;
