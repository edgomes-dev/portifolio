import styled from "styled-components"

export const Container = styled.div`
    //background-color: #F6F7F8;
    background-color: #FFF;
    margin: auto;

    @media screen and (min-width: 1024px)
    {
        max-width: 980px;
    }

    @media screen and (max-width: 767px)
    {
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px)
    {
        width: 100%;
    }
`;