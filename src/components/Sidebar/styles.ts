import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  width: 100%;
  max-width: 20rem;
  padding: 2rem 1rem;

  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.1);
  background: var(--white);

  position: fixed;
  left: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  > img {
    height: 3.5rem;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
`;

interface ILinkProps {
  active?: boolean;
}

export const Link = styled.li<ILinkProps>`
  border-radius: 0.5rem;
  background: ${(props) => (props.active ? "var(--cyan-400)" : "transparent")};

  > a {
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    gap: 0.75rem;
    align-items: center;

    transition: filter 0.2s;

    svg {
      font-size: 1.5rem;
      color: ${(props) => (props.active ? "var(--white)" : "var(--gray-600)")};
    }

    span {
      font-size: 1.15rem;
      font-weight: 600;
      color: ${(props) => (props.active ? "var(--white)" : "var(--gray-400)")};
    }

    &:hover {
      filter: ${(props) => !props.active && "brightness(0.8)"};
    }
  }
`;
