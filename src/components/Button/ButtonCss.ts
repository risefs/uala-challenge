import styled from "styled-components";

export const ButtonContainer = styled.div`
  .t-button:hover {
    background-color: #d1d6da;
    box-shadow: 0px 15px 20px #cde5fb;
    color: #fff;
    transform: translateY(-7px);
  }
  .t-button {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    display: inline-block;
    border-radius: 6px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
  }
`;
