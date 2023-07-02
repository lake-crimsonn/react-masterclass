import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Mother = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 0 Box를 상속받아서 사용
const Circle = styled(Box)`
  border-radius: 50px;
`;

// 1 버튼을 a태그로 변경해서 사용
const Btn = styled.button`
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// 2 input의 attrs를 포함하는 태그 생성할 수 있다
const Attr = styled.input.attrs({
  required: true,
})`
  background-color: wheat;
`;

// 3 keyframes를 이용한 애니메이션
const rotateAnimation = keyframes`
  /* from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  } */
  0%{
    transform: rotate(0deg);
    border-radius: 0px; 
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

// 5 pseudo selector
const Emoji = styled.span`
  font-size: 40px;
`;

// 3 animation 변수를 가져와서 박스에 적용
const AniBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  // 4 AniBox 안에 있는 span을 추적할 수 있다
  span {
    font-size: 40px;
    // span:hover
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }

  // 5 Emoji pseudo selector
  ${Emoji} {
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

// 6 index.js에 있는 ThemeProvider.theme를 통해서 부모의 색상을 가져올 수 있다
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

// 6 index.js에 있는 ThemeProvider.theme를 통해서 부모의 색상을 가져올 수 있다
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Father>
        <Box bgColor="tomato"></Box>
        <Box bgColor="teal"></Box>
        {/* 0 */}
        <Circle bgColor="wheat"></Circle>
      </Father>

      {/* 1 */}
      <Btn as="a" href="/">
        click
      </Btn>
      {/* 2 */}
      <Attr></Attr>

      <Mother>
        {/* 3 */}
        <AniBox>
          {/* 4 */}
          <span>🙂</span>
          {/* 5 */}
          <Emoji>🙂</Emoji>
        </AniBox>
      </Mother>

      {/* 6 */}
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
    </div>
  );
}

export default App;
