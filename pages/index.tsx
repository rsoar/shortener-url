import { NextPage } from "next";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../common/styles/global";
import * as C from "./style";
import { IData } from "../interface/IData";
import { getUrl } from "../services/getUrl";

const Homepage: NextPage = () => {
  const [data, setData] = useState<IData>();
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const shortenUrl = async () => {
    setIsLoading(true);
    try {
      const response = await getUrl("url", value, "/api/shortener");
      setData(response.data);
    } catch (_) {
      throw new Error("Could not fetch URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <C.Container>
        <C.Title>Encurtador de URL</C.Title>
        <C.Input
          placeholder="Insira a URL"
          name="url"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <C.Button onClick={shortenUrl}>Encurtar</C.Button>
        {isLoading ? (
          <span>loading</span>
        ) : (
          <C.Result>
            <a href={`${data?.url_code}`}>Go to redirect {data?.url}</a>
          </C.Result>
        )}
      </C.Container>
      <GlobalStyle />
    </>
  );
};

export default Homepage;
