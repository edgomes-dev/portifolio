import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media screen and (max-width: 767px)
    {
        display: block;
    }
`;

export const Img = styled.div`
    height: 230px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;

    .img
    {
        width: 70%;
        height: 100%;
    }

    @media screen and (max-width: 767px)
    {
        height: 200px;

        .img
        {
            margin: auto;
            width: 200px;
            height: 200px;
        }
    }
`;

export const Aboutme = styled.div`
    height: 240px;
    flex: 2;

    h1
    {
        margin-left: 5px;
        font-family: 'Baskervville', san-serif;
    }

    p 
    {
        margin-left: 5px;
        margin-rigth: 5px;
        font-family: Arial, Helvetica, sans-serif;
    }

`;

export const AboutContacts = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 15px;

    a
    {
        background-color: #7CAFC4;
        border-radius: 5px;
        color: #FFF;
        text-decoration: none;
        padding: 5px;

        &:hover
        {
            background-color: #add8e6;
        }
    }

    @media screen and (max-width: 767px)
    {
        a
        {
            font-size: 10pt;
        }
    }
`;