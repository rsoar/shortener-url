import * as React from "react";
import * as S from "./style";

function Header() {
  return (
    <S.Container>
      <S.Logo src="" alt="icon" />
      <S.List>
        <S.Item>Sobre</S.Item>
        <S.Item>Contato</S.Item>
      </S.List>
    </S.Container>
  );
}

export default Header;
