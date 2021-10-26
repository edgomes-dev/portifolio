import styled from "styled-components"

export const Container = styled.div`
    text-align: center;

    h2
    {
        font-family: 'Baskervville', san-serif;
    }
`;

export const ContactArea = styled.div`
    display: grid;
    padding: 0px 10px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const ContactItem = styled.a`
    text-decoration: none;
    color: #000;
    border: 1px solid #7CAFC4;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    margin: 0;

    img 
    {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-top: 5px;
    }

    @media screen and (max-width: 767px)
    {
        border: none;
        box-shadow: none;
    }
`;
