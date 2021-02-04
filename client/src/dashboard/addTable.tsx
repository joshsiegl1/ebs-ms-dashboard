import React, { useState } from "react";

import { Employee } from "../ts-models";

const states = require("./states.json");
const disciplines = require("./disciplines.json").disciplines;

const addTable = (): JSX.Element => {
    let [firstName, setFirstName] = useState<string>("");
    let [lastName, setLastName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [account, setAccount] = useState<string>("");
    let [discipline, setDiscipline] = useState<string>("");
    let [state, setState] = useState<string>("");

    let [loading, setLoading] = useState<boolean>(false);

    const createStateOptions = (): JSX.Element[] => {
        let options: JSX.Element[] = [];

        for (let state in states) {
            let value: string = states[state];

            options.push(<option value={value}>{value}</option>);
        }

        return options;
    };

    const createDisciplineOptions = (): JSX.Element[] => {
        let options: JSX.Element[] = [];

        for (let discipline in disciplines) {
            let value: string = disciplines[discipline];

            options.push(<option value={value}>{value}</option>);
        }

        return options;
    };

    const onAddToList = async (): Promise<void> => {
        let employee: Employee = {
            firstName: "",
            lastName: "",
            email: "",
            account: "",
            discipline: "",
            state: "",
        };

        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.email = email;
        employee.account = account;
        employee.discipline = discipline;
        employee.state = state;

        setLoading(true);
        await fetch("http://localhost:5000/process/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(employee),
        }).then(result => (result.ok ? setLoading(false) : setLoading(false)));
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Primary Email</th>
                        <th>Discipline</th>
                        <th>State</th>
                        <th>Account</th>
                    </tr>
                    <tr>
                        <td>
                            <input
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setFirstName(event.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setLastName(event.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.target.value)}
                            />
                        </td>
                        <td>
                            <select
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => setDiscipline(event.target.value)}>
                                {createDisciplineOptions()}
                            </select>
                        </td>
                        <td>
                            <select
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => setState(event.target.value)}>
                                {createStateOptions()}
                            </select>
                        </td>
                        <td>
                            <input
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setAccount(event.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ marginTop: "10px" }}>
                <button onClick={onAddToList}>Add to List</button>
            </div>
        </div>
    );
};

export default addTable;
