import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 200px;
  border-right: 1px solid #999;
  z-index: 101;
  @media (max-width: 1024px) {
    display: none;
    width: 0;
  }

  li {
    text-align: center;
    padding: 10px;
    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }
`;
