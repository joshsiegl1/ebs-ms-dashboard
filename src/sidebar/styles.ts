import styled, { StyledFunction } from "styled-components";

interface IconProps { 
    isSelected: boolean 
}

export const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #272727;
    height: 100%;
    width: 40px;
    box-shadow: 1px 1px 5px black;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Icon = styled.div<IconProps>`
    padding: 20px;
    cursor: pointer;
    ${props => props.isSelected ? `background-color: dodgerblue` : `background-color: transparent`}
    &:hover {
        background-color: dodgerblue;
    }
 
`;
