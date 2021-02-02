import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * { 
        font-family: Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif; 
    }

    p {
        margin: 0px; 
    }

    table { 
        border-spacing: 0px; 
        border-collapse: collapse;
        white-space: nowrap; 
        table-layout: fixed; 
    }

    th { 
        background-color: #272727; 
        color: white; 
        padding: 10px;
        font-weight: 600;  
    }

    input, select { 
        border: 1px solid rgba(0,0,0,.6); 
        box-sizing: border-box; 
    }

    button { 
        transition: all 0.5s ease; 
        background-color: dodgerblue; 
        color: white; 
        font-family: Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif; 
        font-weight: 600; 
        border: 1px solid white; 
        box-shadow: 0px 0px 2px dodgerblue; 
        line-height: 1; 
        cursor: pointer; 
        padding-top: 10px; 
        padding-bottom: 10px; 
        padding-left: 25px;
        padding-right: 25px;  
        &:hover { 
            background-color: #0078f0; 
            box-shadow: 0px 0px 5px black; 
        }
    }
`;
