import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  max-width: calc(100vw - 20rem);
  padding: 2rem;
  padding-top: 10rem;

  position: absolute;
  top: 0;
  right: 0;
`;

export const EmptyTable = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    z-index: 1;
    font-size: 2rem;
    font-weight: 400;
    color: var(--gray-600);
  }

  button {
    z-index: 1;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background: var(--green-400);

    color: var(--white);
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;

    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  }
`;
