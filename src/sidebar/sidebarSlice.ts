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
        emails: state => {
            state.selected = "emails";
        },
    },
});

export const { dashboard, emails } = selectedSlice.actions;

export const selectSidebar = (state: RootState) => state.sidebar; 

export default selectedSlice.reducer; 
