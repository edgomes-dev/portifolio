import styled from "styled-components"

export const Container = styled.div`
    background-color: #696969;
    margin: 10px 0;
    display: flex;
`;

export const AreaLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3
    {
        margin: 0;
        font-family: 'Baskervville', san-serif;
    }

    p
    {
        margin: 0;
    }
`;

export const AreaRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 10px;

    a
    {
        img 
        {
            margin-top: 5px;
            width: 25px;
            height: 25px;
        }
    }
`;