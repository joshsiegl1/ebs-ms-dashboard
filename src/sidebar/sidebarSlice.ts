import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store/rootReducer'; 

type SidebarState = {
    selected: string;
};

const initialState: SidebarState = {
    selected: "dashboard",
};

const selectedSlice = createSlice({
    name: "selected",
    initialState,
    reducers: {
        dashboard: state => {
            state.selected = "dashboard";
        },
        email: state => {
            state.selected = "email";
        },
    },
});

export const { dashboard, email } = selectedSlice.actions;

export const selectSidebar = (state: RootState) => state.sidebar; 

export default selectedSlice.reducer; 
