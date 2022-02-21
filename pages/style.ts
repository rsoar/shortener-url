import styled, { css, keyframes } from "styled-components";

const BoxConfig = css`
  width: 50%;
  margin: 0 auto;
`;

export const Container = styled.main`
  text-align: center;
`;

export const ShortenerBox = styled.div`
  background-color: var(--blue-terciary);
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ITitle {
  color: string;
}

export const Title = styled.h1<ITitle>`
  margin-bottom: 1.2rem;
  ${props => props.color && css`
    color: ${props.color};
  `}
`;

export const Form = styled.form`
  ${BoxConfig}; 
`;

export const Input = styled.input`
  width: 80%;
  padding: 1rem 0.5rem;
  border-radius: 6px 0 0 6px;
  border: none;
`;

export const Button = styled.button`
  background-color: var(--blue-primary);
  color: var(--secondary);
  padding: 1rem;
  width: 20%;
  height: 100%;
  border: none;
  font-weight: bold;
  border-radius: 0 6px 6px 0px;
`;

export const Content = styled.div`
  ${BoxConfig};
  margin-top: 1.5rem;
  background-color: var(--primary);
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewLink = styled.a`
  font-size: 1.4rem;
`;

export const CopyButton = styled.button`
  margin-left: 1rem;
  background-color: var(--blue-primary);
  padding: 0.6rem 2rem;
  border-radius: 6px;
  border: none;
  color: var(--primary);
  position: relative;
`;

export const Section = styled.section`
  ${BoxConfig};
  border-radius: 12px;
  padding: 2rem ;
  margin-top: 3rem;
  width: 75%;
  max-width: 860px;
`;

export const QuestionContainer = styled.div`
  text-align: start;
  margin-bottom: 1.2rem;
  background-color: #fff;
  border-radius: 8px;

  &:last-child {
    margin: 0;
  }
  
`;

export const Question = styled.h3`
  text-align: start;

`;

export const Head = styled.div`
  padding: 1.2rem 2rem;
  box-shadow: 0 0 6px #00000015;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

`;

interface IAnswer {
  visible: boolean;
}

const openQuestion = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  } to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    }
`;

export const Answer = styled.div<IAnswer>`
  padding: 1.2rem 2rem;
  border-top: 1px dashed #e4e4e4;
  box-shadow: 0 0 6px #00000015;
  animation: ${openQuestion} 0.2s ease;

  ${props => !props.visible && css`
    display: none;
  ` }
`;

interface IPopUp {
  show: boolean;
}

const fade = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

export const PopUp = styled.div<IPopUp>`
  background-color: #F40000;
  color: var(--primary);
  width: 80px;
  padding: 6px 0px;
  font-size: 12px;
  position: absolute;
  top: -35px;
  right: 0;
  border-radius: 8px;
  font-weight: bold;
  animation: ${fade} 0.3s ease-in-out;

  &::after {
    content: "";
    width: 1px;
    height: 1px;
    background-color: #F40000;
    padding: 4px;
    transform: rotate(45deg);
    position: absolute;
    bottom: -4px;
    right: 10px;
  }

  ${props => !props.show && css`
    display: none;
  `}
`;