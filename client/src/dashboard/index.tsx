import React from "react";

import { Container } from "./styles";

import SideBar from "../sidebar";
import addTable from "./addTable";
import runningTable from './runningTable'; 

const Dashboard = (): JSX.Element => {
    const onProcess = (): void => {};
    const onAddToList = (): void => {}; 
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
                <div>
                    {runningTable()}
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button onClick={onProcess}>Process</button>
                        <input type="checkbox" />
                        <label>Include Welcome Email</label>
                    </div>
                </div>

                <div>
                    {addTable()}
                    <button onClick={onAddToList}>Add to List</button>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
