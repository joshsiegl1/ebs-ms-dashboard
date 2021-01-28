import { createSlice } from "@reduxjs/toolkit";

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
        selectDashboard: state => {
            state.selected = "dashboard";
        },
        selectEmail: state => {
            state.selected = "email";
        },
    },
});

export const { selectDashboard, selectEmail } = selectedSlice.actions;
