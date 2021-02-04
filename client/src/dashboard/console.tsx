import React, { useEffect, useState } from "react";

import { ConsoleTextArea } from "./styles";

import * as signalR from "@microsoft/signalr";

const Console = (): JSX.Element => {
    const [hubConnection, setHubConnection] = useState<signalR.HubConnection>();
    let [dialog, pushDialog] = useState<string>("");
    useEffect(() => {
        const createHubConnection = async () => {
            const connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5000/message")
                .build();

            try {
                await connection.start();

                connection.on("ReceivedMessage", (message: string) => {
                    pushDialog(dialog + message + "\n");
                });
            } catch (error) {
                pushDialog(
                    "Error: Couldn't establish a SignalR connection to the server\n" +
                        error.message
                );
            }
            setHubConnection(connection);
        };
        createHubConnection();
    }, []);

    return (
        <div>
            <ConsoleTextArea value={dialog} />
        </div>
    );
};

export default Console;
