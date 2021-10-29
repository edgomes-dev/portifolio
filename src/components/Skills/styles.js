import styled from "styled-components"

export const Container = styled.div`
    margin-top: 50px;

    h2
    {
        text-align: center;
        font-family: 'Baskervville', san-serif;
    }
`;


export const Skills = styled.div`
    display: grid;
    padding: 0px 10px;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media screen and (max-width: 767px)
    {
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
`;

export const SkillsItem = styled.div`
    border: 1px solid #7CAFC4;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 15px;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);

    img
    {
        gap: 5px;

        width: 50px;
        height: 50px;
        border-radius: 5px;
        object-fit: contain;
    }

    @media screen and (max-width: 767px)
    {
        padding: 5px;
    }
`;