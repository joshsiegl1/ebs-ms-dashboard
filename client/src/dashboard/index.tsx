import React from "react";

import { Container } from "./styles";

import SideBar from "../sidebar";
import addTable from "./addTable";
import runningTable from "./runningTable";
import Console from "./console";

const Dashboard = (): JSX.Element => {
    return (
        <Container>
            <SideBar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                    marginRight: "20px",
                }}>
                {runningTable()}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    {addTable()}

                    {Console()}
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
