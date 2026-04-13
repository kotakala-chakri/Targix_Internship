import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #1e293b;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #eafa09;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/posts">Posts</StyledLink>
      <StyledLink to="/users">Users</StyledLink>
      <StyledLink to="/todos">TodoList</StyledLink>
    </Nav>
  );
};
