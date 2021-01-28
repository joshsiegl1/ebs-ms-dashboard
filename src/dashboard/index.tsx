import React from "react";

import { Container } from "./styles";

import SideBar from '../sidebar'; 

const Dashboard = (): JSX.Element => {
    return (
        <Container>
            <SideBar /> 
            <p>Dashboard works!</p>
        </Container>
    );
};

export default Dashboard;
