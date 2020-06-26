import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
`;

export const Image = styled.div`
  &.avatar {
    background: linear-gradient(208deg, #2d495f, #906235);
  }
`;
