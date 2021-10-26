import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #696969;

    h1 
    {
        font-family: 'Baskervville', san-serif;
    }

    @media screen and (max-width: 1024px)
    {
        h1
        {
            font-size: 12pt;
        }
    }
`;