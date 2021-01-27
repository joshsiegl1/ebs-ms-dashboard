import React from "react";
import { Global } from "./styles";

import Header from "../header";

const App = (): JSX.Element => {
    return (<React.Fragment>
        <Global /> 
        <Header /> 
    </React.Fragment>
    );
};

export default App;
