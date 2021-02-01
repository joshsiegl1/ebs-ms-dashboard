import React from "react";

const states = require('./states.json'); 

const addTable = (): JSX.Element => {

    const createStateOptions = (): JSX.Element[] => { 
        let options = []; 
        for (let state in states)
        { 
            let value = states[state]; 
            options.push(<option value={value}>{value}</option>); 
        }

        return options; 
    }

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
                        <input />
                    </td>
                    <td>
                        <select>
                            {createStateOptions()}
                        </select>
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
