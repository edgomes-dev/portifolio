import styled from "styled-components"

export const Container = styled.div`
    h2
    {
        margin-left: 10px;
        font-family: 'Baskervville', san-serif;
    }

    button 
    {
        display: block;
        margin: auto;
        margin-top: 15px;

        background-color: #7CAFC4;
        color: #FFF;
        font-size: 12pt;
        padding: 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover
        {
            background-color: #add8e6;
        }
    }
`;

export const ProjectsArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`;

export const ProjectsAreaItem = styled.div`
    display: flex;
    flex-direction: column;

    img
    {
        width: 487px;
        height: 280px;
        background-size: contain;
        background-repeat: no-repeat ;
    }

    div
    {
        display: flex;
        justify-content: center;
    }

    button 
    {
        background-color: #7CAFC4;
        color: #FFF;
        font-size: 12pt;
        padding: 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 767px)
    {
        img
        {
            width: 100%;
        }
    }
`;
