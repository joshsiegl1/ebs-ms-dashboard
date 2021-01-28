import React from "react";

import { Container, Logo } from "./styles";

const Header = (): JSX.Element => {
    return (
        <Container>
            <Logo src="https://ebshealthcare.com/wp-content/uploads/revslider/slider-2/EBSHealthcareLogo.jpg" width="81" height="43"/>
        </Container>
    );
};

export default Header;
