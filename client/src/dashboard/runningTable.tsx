import React, { useState, useEffect } from "react";

import { Employee } from '../ts-models'; 

const runningTable = (): JSX.Element => {

    let [employees, setEmployees] = useState<Employee[]>([]); 

    useEffect((): void => { 
        async function fetchData() { 
            await fetch("http://localhost:5000/process/employee/", { 
                method: 'GET', 
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json"
                }

            })
            .then(response => response.json())
            .then((data: Employee[]) => { 
                setEmployees(data); 
            })
        }

        fetchData(); 
    }, []); 

    const renderEmpoyees = (): JSX.Element[] => { 
        let elements: JSX.Element[] = [];
        if (employees.length <= 0) { 
            elements.push(<div>Loading</div>); 
        }  

        for (let i = 0; i < employees.length; i++) { 
            elements.push(<tr>
                <td>{i + 1}</td>
                <td>{employees[i].firstName}</td>
                <td>{employees[i].lastName}</td>
                <td>{employees[i].email}</td>
                <td>{employees[i].state}</td>
                <td>{employees[i].discipline}</td> 
                <td>{employees[i].account}</td>   
            </tr>)
        }

        return elements; 
    }

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
                {renderEmpoyees()}
            </tbody>
        </table>
    );
};

export default runningTable;
