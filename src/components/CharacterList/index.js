import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import characterHelper from "helper/characterHelper";

import { CharacterListContainer } from "./style";

export default function CharacterList({ query }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(1);
  const listRef = useRef();

  useEffect(() => {
    listRef.current.scrollTo(0, 0);
    setLoading(true);
    setPage(1);
    fetchCharacter(1, true);
  }, [query]);

  async function fetchCharacter(page, reset) {
    try {
      const result = await characterHelper.getAllCharacter({
        page: page,
        name: query?.name,
        status: query?.status,
        gender: query?.gender,
      });
      if (result.error) {
        if (result.error === 404) {
          return setData([]);
        }
        throw new Error(result.error);
      }
      setMaxPage(result.info.pages);
      setData(reset ? result.results : [...data, ...result.results]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const handleScroll = (e) => {
    try {
      if (isLoading || page >= maxPage) return;
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        setLoading(true);
        const nextPage = page + 1;
        setPage(nextPage);
        fetchCharacter(nextPage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CharacterListContainer onScroll={handleScroll} ref={listRef}>
      <ul>
        {data ? (
          data.length < 1 ? (
            <li className="listItem">
              <h4>Not Found</h4>
            </li>
          ) : (
            data.map((character) => (
              <li
                key={character.id}
                className="listItem"
                onClick={() => {
                  navigate(`/contact/${character.id}`);
                }}
              >
                <img src={character.image} alt="pic of character" />
                <div>
                  <p>{character.name}</p>
                  <p>{character.species}</p>
                </div>
              </li>
            ))
          )
        ) : (
          <li className="listItem">Loading...</li>
        )}
      </ul>
    </CharacterListContainer>
  );
}
