import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  min-height: 600px;
  width: 100vw;
  min-width: 600px;

  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  height: 35rem;
  width: 45rem;

  border-radius: 1rem;
  background: var(--gray-50);

  display: grid;
  grid-template-columns: 12rem 1fr;

  > div:first-child {
    box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 7rem;
      transform: rotate(-90deg);
    }
  }

  > div + div {
    border-radius: 0 1rem 1rem 0;
    padding: 2rem 1rem;

    header > h2 {
      color: var(--gray-600);
      font-size: 2rem;
    }
  }
`;

export const Form = styled.form`
  padding: 3rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    > label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      color: var(--gray-600);
    }
  }

  input,
  select {
    font-size: 1rem;
    outline-color: var(--cyan-400);
    border-radius: 0.5rem;
    border: 1px solid var(--gray-200);
    background: var(--white);
  }

  input {
    padding: 0.75rem 1rem;

    &.errorCPF,
    &.errorEmail {
      position: relative;
      outline: auto;
      outline-color: var(--red-400);
    }
  }

  select {
    height: 100%;
    padding: 0 0.75rem;

    color: var(--gray-600);
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    padding: 1rem 2rem;
    background: var(--green-400);
    border-radius: 0.5rem;
    color: var(--white);
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }

  button + button {
    background: var(--gray-400);
  }
`;
