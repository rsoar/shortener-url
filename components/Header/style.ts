import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: var(--primary);
`;

export const Logo = styled.img`
  width: 120px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin: 0;
  }
`;
