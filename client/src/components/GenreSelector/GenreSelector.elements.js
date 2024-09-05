import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const GridContainer = styled(Grid)`
    width: 80%;
    margin: 30px auto;
    @media (max-width: 1100px){
        width: 90vw;
    };
    @media (max-width: 400px){
        margin: 10px auto;
    };
    
    & .genre{
        height: 60px;
        width: 150px;
        margin: 0 auto;
        border-radius: 5px;
        display: grid;
        place-items: center;
        transition: all .3s ease-in-out;
        & h4{
            color: #ffffff;
            text-transform: uppercase;
            transition: all .3s ease-in-out;
        };
        &:hover{
            cursor: pointer;
        };
        @media (max-width: 1300px){
            height: 90px;
            width: 200px;
        };
        @media (max-width: 1100px){
            height: 75px;
            width: 190px;
        };
        @media (max-width: 880px){
            height: 60px;
            width: 145px;
            & h4{
            font-size: 0.9rem;
        };
        };
    };
    & .thriller{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: inherit;
        };
    };
    & .romance{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .young-adult{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .science-fiction{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .fantasy{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .poetry{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .biography{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .self-help{
        background-color: #6650f6 ;
        &:hover{
            & h4{
                color: #6650f6 ;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
`

    
