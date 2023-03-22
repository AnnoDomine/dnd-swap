import styled from "@emotion/styled";

export const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    font-size: 16px;
    border-radius: 0px;
    color: black;
    text-align: left;
    font-weight: bold;
    border-color: transparent;
    cursor: pointer;
    &:hover {
        color: darkGray;
        border-color: transparent;
    }
    &:disabled {
        cursor: default;
        color: darkGray;
    }
`;
