// npm i styled-component

import styled from "styled-component";

const Father = styled.div`
  display: flex;
`;
const Box = styled`
  background-color: ${(props) => props.bgColor}
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <div className="App">
      <Father>
        <Box bgColor="tomato"></Box>
        <Box bgColor="teal"></Box>
      </Father>
    </div>
  );
}

export default App;
