import styled from "@emotion/styled";

export const CharacterListContainer = styled.div`
  height: calc(100% - 200px);
  overflow: auto;
  .listItem {
    display: flex;
    flex-direction: row;
    padding: 5px;
    border-bottom: 1px solid #999;
    padding: 10px;
    img {
      height: 70px;
      width: 70px;
      border-radius: 50px;
      margin-right: 10px;
    }
  }
`;
