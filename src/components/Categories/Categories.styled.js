import styled from "styled-components";

export const Section = styled.section`
    text-align: center;
    padding: 40px 20px;
    background-color: #eee;
`;

export const Grid = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
`;

export const Card = styled.div`
    background-color: #eee;
    padding: 20px;
    border-radius: 12px;
    width: 200px;
    height: 150px;
    overflow: hidden; 
    cursor: pointer;

    &:hover .inner {
    transform: scale(1.05);
    background-color: #64646447;
    border: 1px solid #4C2A80;
    }
`;

export const Inner = styled.div.attrs({ className: 'inner' })`
    transition: transform 0.3s ease-in-out, background-color 0.3s;
    border-radius: 12px;
    height: 100%;
    background-color: white;
    border: 1px solid silver;
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

export const Titulo = styled.p`
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2rem;
`;
