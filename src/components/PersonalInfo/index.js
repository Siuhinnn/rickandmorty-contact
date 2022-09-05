import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import characterHelper from "helper/characterHelper";
import ContactList from "components/ContactList";
import EpTable from "components/EpTable";
import { dateFormatting } from "utils/dateFormatUtils";

import { PersonalInfoContainer } from "./style";

export default function PersonalInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        const result = await characterHelper.getSingleCharacter(id);
        if (result.error) {
          throw new Error(result.error);
        }
        setInfo(result);
      } catch (e) {
        console.log(e);
      }
    }
    init();
  }, [id]);

  return (
    <PersonalInfoContainer>
      <ContactList />
      {info ? (
        <div className="infoContainer">
          <div className="titleBox">
            <img src={info.image} alt="pic of character" />
            <h2>{info.name}</h2>
          </div>
          <h2>Personal Info</h2>
          <div className="infoBox">
            <ul>
              <li>Status: {info.status}</li>
              <li>Gender: {info.gender}</li>
              <li>Species: {info.species}</li>
              <li>Location: {info.location?.name}</li>
              <li>Origin: {info.origin?.name}</li>
              <li>Created date: {dateFormatting(info.created)}</li>
            </ul>
          </div>
          <h2>Episodes</h2>
          <EpTable query={info.episode} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </PersonalInfoContainer>
  );
}
