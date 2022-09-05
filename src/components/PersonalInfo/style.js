import styled from "@emotion/styled";

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  .infoContainer {
    position: relative;
    left: 200px;
    height: 100vh;
    width: calc(100% - 550px);
    padding: 20px;
    h2 {
      padding: 10px;
    }
    @media (max-width: 1024px) {
      left: 0;
      width: calc(100% - 200px);
    }
  }
  .titleBox {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 150px;
    }
  }
  .infoBox {
    border: 1px solid #999;
    padding: 10px;
    li {
      display: flex;
    }
  }
`;
