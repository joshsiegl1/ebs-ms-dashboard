import React from "react";

const states = require("./states.json");
const disciplines = require("./disciplines.json").disciplines;

const addTable = (): JSX.Element => {
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

    return (
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
                        <input />
                    </td>
                    <td>
                        <input />
                    </td>
                    <td>
                        <input />
                    </td>
                    <td>
                        <select>{createDisciplineOptions()}</select>
                    </td>
                    <td>
                        <select>{createStateOptions()}</select>
                    </td>
                    <td>
                        <input />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default addTable;
