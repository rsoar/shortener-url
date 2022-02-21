import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import * as C from "./style";
import { IData } from "../interface/IData";
import { getUrl } from "../services/getUrl";
import { GlobalStyle } from "../common/styles/globals";
import Header from "../components/Header/index";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Error } from "../components/Error";

interface IQuestion {
  id: number;
  question: string;
  answer: string;
  show: boolean;
}

const arr = [
  {
    id: 1,
    question: "Por que encurtar links?",
    answer:
      "Um dos principais benefícios dos links encurtados é a possibilidade de rastreá-los. É possível criar inúmeros links nesse formato e, portanto, identificar os cliques vindos de cada um deles.",
    show: false,
  },
  {
    id: 2,
    question: "Posso personalizar meu link?",
    answer:
      "Algumas plataformas para encurtamento de links também permitem a personalização da URL. Nesse caso, é possível inserir termos que fazem sentido, e não uma sequência aleatória de letras e símbolos.",
    show: false,
  },
  {
    id: 3,
    question: "Corro risco encurtando o link??",
    answer: "Não! Não há nenhum risco encurtar seu link.",
    show: false,
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur recusandae placeat?",
    show: false,
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Vasco",
    show: false,
  },
];

const Homepage: NextPage = () => {
  const [data, setData] = useState<IData | null>(null);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isError, setIsError] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setQuestions(arr);
  }, []);

  const shortenUrl = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await getUrl("url", value, "/api/shortener");
      setData(response.data);
    } catch (err) {
      setIsError(true);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActiveAsk = (id: number) => {
    setQuestions(
      questions.map((x) => (x.id === id ? { ...x, show: !x.show } : { ...x }))
    );
  };

  const copy = () => {
    setShowPopUp(true);
    navigator.clipboard.writeText(data?.url_shortened as string);
    setTimeout(() => setShowPopUp(false), 3000);
  };

  return (
    <>
      <C.Container>
        <Header />
        <C.ShortenerBox>
          <C.Title color="var(--primary)">Encurtador</C.Title>
          <C.Form>
            <C.Input
              placeholder="Insira a URL"
              name="url"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
            <C.Button onClick={shortenUrl}>Encurtar</C.Button>
          </C.Form>

          {data ? (
            <C.Content>
              <C.NewLink href={data.url_code}>{data.url_shortened}</C.NewLink>
              <C.CopyButton onClick={copy}>
                Copiar
                <C.PopUp show={showPopUp} style={{ cursor: "default" }}>
                  Copiado
                </C.PopUp>
              </C.CopyButton>
            </C.Content>
          ) : (
            <div>{isError && <Error />}</div>
          )}
        </C.ShortenerBox>

        <C.Section>
          <C.Title color="var(--text-black-terciary)">
            Dúvidas frequentes
          </C.Title>
          {questions.map((x) => (
            <C.QuestionContainer key={x.id}>
              <C.Head onClick={() => handleActiveAsk(x.id)}>
                <C.Question>{x.question}</C.Question>
                {x.show ? <AiOutlineUp /> : <AiOutlineDown />}
              </C.Head>
              <C.Answer visible={x.show}>{x.answer}</C.Answer>
            </C.QuestionContainer>
          ))}
        </C.Section>
      </C.Container>
      <GlobalStyle />
    </>
  );
};

export default Homepage;
