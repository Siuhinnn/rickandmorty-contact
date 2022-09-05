import styled from "@emotion/styled";

export const ContactListContainer = styled.div`
  position: relative;
  left: 200px;
  height: 100vh;
  width: 350px;
  border-right: 1px solid #999;
  @media (max-width: 1024px) {
    left: 0;
  }

  .subTitle {
    border-bottom: 1px solid #999;
    /* height: 120px; */
    padding: 10px;
    h2 {
      padding: 5px;
    }
  }
  .secondRow {
    display: flex;
    flex-direction: row;
    div {
      padding: 5px;
    }
  }
`;
