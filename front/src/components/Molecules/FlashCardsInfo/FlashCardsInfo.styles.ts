import styled from "styled-components";

export const FlashCardsInfoWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.inputBlue};
    border: 3px solid ${({ theme }) => theme.colors.darkPurple};
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 1/span 1;
    padding: 20px 10px;
    justify-content: center;
    user-select: none;
`;