import styled, { StyledFunction } from "styled-components";

interface IconProps { 
    isSelected: boolean 
}

export const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #272727;
    height: 100%;
    width: 60px;
    box-shadow: 1px 1px 5px lightgray;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Icon = styled.div<IconProps>`
    width: 100%; 
    height: 50px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    cursor: pointer;
    background-color: ${props => props.isSelected ? `dodgerblue` : `transparent`}; 
    &:hover {
        background-color: dodgerblue;
    }
 
`;
