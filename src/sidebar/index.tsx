import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import { Container, Icon } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const SideBar = (): JSX.Element => {
    const history = useHistory();

    const onClick = (route: string): void => history.push(route);

    return (
        <Container>
            <Icon onClick={() => onClick("dashboard")}>
                <FontAwesomeIcon
                    icon={faTachometerAlt}
                    size="lg"
                    color="lightgray"
                />
            </Icon>
            <Icon onClick={() => onClick("emails")}>
                <FontAwesomeIcon
                    icon={faMailBulk}
                    size="lg"
                    color="lightgray"
                />
            </Icon>
        </Container>
    );
};

export default withRouter(SideBar);
