import React from "react";

import { Container } from "./styles";

import SideBar from "../sidebar";

const Dashboard = (): JSX.Element => {


    const onProcess = (): void => { 

    }

    return (
        <Container>
            <SideBar />
            <div style={{marginLeft: '20px'}}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Primary Email
                            </th>
                            <th>
                                Discipline
                            </th>
                            <th>
                                State
                            </th>
                            <th>
                                Account
                            </th>
                        </tr>
                    </tbody>
                </table>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={onProcess}>Process</button>
                <input type="checkbox" /> 
                <label>Include Welcome Email</label>
            </div>
        </div>
        </Container>
    );
};

export default Dashboard;
