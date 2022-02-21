import * as React from "react";
import * as S from "./style";

export const Error = () => {
  return (
    <S.Container>
      <S.Icon
        src="https://o.remove.bg/downloads/d2cca997-f9d3-4a56-a147-07697ad9191f/monster-sorry-removebg-preview.png"
        alt="icon_error"
      />
      <S.Info>Não foi possível encurtar a URL</S.Info>
    </S.Container>
  );
};
