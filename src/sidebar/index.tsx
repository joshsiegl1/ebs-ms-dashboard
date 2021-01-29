import React from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory, withRouter } from "react-router-dom";

import { 
    dashboard, 
    emails, 
    selectSidebar
} from './sidebarSlice'; 

import { Container, Icon } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const SideBar = (): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch(); 

    const { selected } = useSelector(selectSidebar); 

    const onClick = (route: string): void => { 
        if (route === 'dashboard') dispatch(dashboard()); 
        if (route === 'emails') dispatch(emails()); 
        
        history.push(route); 
    }

    return (
        <Container>
            <Icon isSelected={selected === 'dashboard'} onClick={() => onClick("dashboard")}>
                <FontAwesomeIcon
                    icon={faTachometerAlt}
                    size="lg"
                    color="lightgray"
                />
            </Icon>
            <Icon isSelected={selected === 'emails'} onClick={() => onClick("emails")}>
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
