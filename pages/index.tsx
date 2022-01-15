import { NextPage } from "next";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../common/styles/global";
import * as C from "./style";
import { IData } from "../interface/IData";
import getUrl from "../services/getUrl";

const Homepage: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<IData>();

  const shortenUrl = async () => {
    const response = await getUrl(query);
    setData(response.data);
  };

  return (
    <>
      <C.Container>
        <C.Title>Encurtador de URL</C.Title>
        <C.Input
          placeholder="Insira a URL"
          name="url"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <C.Button onClick={shortenUrl}>Encurtar</C.Button>
        {data !== undefined && (
          <C.Result>
            <a href={data.url}>{data.url_shortened}</a>
          </C.Result>
        )}
      </C.Container>
      <GlobalStyle />
    </>
  );
};

export default Homepage;
