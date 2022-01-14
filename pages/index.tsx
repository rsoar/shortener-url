import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { GlobalStyle } from "../common/styles/global";
import * as C from "./style";
import { IData } from "../interface/IData";

const Homepage: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<IData>();

  const submitUrl = async () => {
    const response: AxiosResponse = await axios.post("/api/shortener", {
      url: query,
    });
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
        <C.Button onClick={submitUrl}>Encurtar</C.Button>
        {data !== undefined && (
          <C.Result>{<span>{data.shortened_url}</span>}</C.Result>
        )}
      </C.Container>
      <GlobalStyle />
    </>
  );
};

export default Homepage;
