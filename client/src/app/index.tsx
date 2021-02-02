import React from "react";
import { Global } from "./styles";

import Header from "../header";
import Routes from "../routes";

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Global />
            <Header />
            <Routes />
        </React.Fragment>
    );
};

export default App;
