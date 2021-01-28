import React from "react";

import { Container } from "./styles";

import SideBar from "../sidebar";

const Dashboard = (): JSX.Element => {
    return (
        <Container>
            <SideBar />
        </Container>
    );
};

export default Dashboard;
