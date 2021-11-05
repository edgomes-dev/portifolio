import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media screen and (max-width: 767px)
    {
        flex-direction: column;
        gap: 0px;
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
        height: 150px;

        .img
        {
            margin: auto;
            width: 180px;
            height: 150px;
        }
    }
`;

export const Aboutme = styled.div`
    height: 240px;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2
    {
        font-size: 28px;
        margin-top: 10px;
        margin-bottom: 0;
        font-family: 'Baskervville', san-serif;
    }

    p
    {
        width: 80%;
        text-align: center;
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