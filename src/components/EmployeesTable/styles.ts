import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0rem 0.5rem;

  tr {
    display: grid;
    grid-template-columns: 15rem 18rem repeat(3, 1fr);
    width: 100%;
  }

  th {
    color: var(--gray-500);
    font-weight: 400;
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 2rem;

    &:nth-child(4) {
      text-align: center;
    }
  }

  tbody {
    width: 100%;
  }

  tbody > tr {
    padding: 1rem 2rem;
    min-height: 4rem;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    cursor: default;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
      .actions {
        display: flex;
      }
    }
  }

  td {
    color: var(--gray-600);
    align-self: center;

    &:first-child {
      font-weight: 500;
    }

    &.team {
      width: fit-content;
      justify-self: center;
      min-width: 5rem;
      padding: 0.5rem;

      text-align: center;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: var(--white);

      border-radius: 2rem;

      &.frontend {
        background: var(--purple-400);
      }
      &.backend {
        background: var(--green-400);
      }
      &.mobile {
        background: var(--blue-400);
      }
    }

    &.actions {
      display: none;

      width: 100%;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;

      button {
        font-size: 1.5rem;
        color: var(--gray-500);
        cursor: pointer;

        & + button {
          font-size: 1.175rem;
        }
      }
    }
  }
`;

export const AddNewEmployeeBtn = styled.button`
  background: var(--green-400);

  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;

  height: 4rem;
  width: 4rem;
  border-radius: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  svg {
    color: var(--white);
    font-size: 2rem;
  }
`;

export const ConfirmDeleteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 15rem;
    width: 35rem;
    padding: 2rem 2rem;

    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

    text-align: center;

    > h2 {
      color: var(--gray-600);
      margin-bottom: 0.5rem;
    }

    > p {
      color: var(--gray-500);
    }

    > div {
      margin-top: 3rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;

      > button {
        padding: 1rem 2rem;
        background: var(--red-400);
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
    }
  }
`;
