import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <footer>
            <Container>
             
            </Container>
        </footer>
    )
}

export default Footer;

const Container = styled.div`
    & a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        & img{
            width: 25px;
            margin-left: 10px;
        }
    }
`
