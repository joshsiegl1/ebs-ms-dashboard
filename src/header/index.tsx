import React from "react";
import LogoAsset from '../../assets/EBSHealthcareLogo.jpg'; 

import { Container, Logo } from "./styles";


const Header = (): JSX.Element => {

    return (
        <Container>
            <Logo
                src={LogoAsset}
                width="117"
                height="66"
            />
        </Container>
    );
};

export default Header;
