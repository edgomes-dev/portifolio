import styled from "styled-components"

export const Container = styled.div`
    h2
    {
        text-align: center;
        font-family: 'Baskervville', san-serif;
    }

    a
    {
        margin-top: 5px;
        text-decoration: none;
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

    .button
    {
        display: flex;
        justify-content: center;
    }
`;

export const ProjectsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const ProjectsAreaItem = styled.div`
    display: flex;

    img
    {
        width: 487px;
        height: 300px;
        background-size: contain;
        background-repeat: no-repeat ;
    }

    div 
    {
        h3
        {
            margin-top: 0px;
            margin-left: 10px;
        }

        p 
        {
            margin: 5px 10px;
        }
    }

    @media screen and (max-width: 767px)
    {
        flex-direction: column;

        img
        {
            width: 100%;
            height: 250px;
        }

        div
        {
            h3
            {
                text-align: center;
                margin-top: 10px;
            }
        }
    }
`;

export const ItemText = styled.div``;

export const ItemButton = styled.div`
    justify-content: flex-end;
    display: flex;
    gap: 3px;

    @media screen and (max-width: 767px)
    {
        justify-content: center;
    }
`;