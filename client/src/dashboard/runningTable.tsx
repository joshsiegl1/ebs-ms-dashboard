import React from "react";

const runningTable = (): JSX.Element => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Primary Email</th>
                    <th>Discipline</th>
                    <th>State</th>
                    <th>Account</th>
                </tr>
            </tbody>
        </table>
    );
};

export default runningTable;
