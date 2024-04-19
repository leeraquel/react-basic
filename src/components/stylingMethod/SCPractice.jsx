import styled, { keyframes } from "styled-components";

export default function SCPractice() {
  return (
    <>
      <SubTilte>스타일 컴포넌트를 이용한 div 입니다.</SubTilte>
      <RotatingDiv> 동작구현 </RotatingDiv>
      <RotatingDiv bgcolor="red"> 동적구현 </RotatingDiv>
    </>
  );
}

const SubTilte = styled.div`
  color: salmon;
  font-size: 44px;
  background-color: black;

  &:hover {
    color: lightblue;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

const rotate = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "pink")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;
