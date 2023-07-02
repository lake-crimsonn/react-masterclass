# styled components

## 설치

- npm i styled-components

## 플러그인

- vscode-styled-components

## 1-styled-com 브랜치

- styled.div``;
  - 기본 사용법
- \${(prop)=>props.bgColor}
  - 부모의 프로퍼티를 가져올 수 있다
- styled(Box)``;
  - 같은 스타일 컴포넌트를 상속 받아서 코드를 재사용한다
- <Btn as="a" href="https://~"> as
  - 굳이 다른 컴포넌트를 만들지 않아도 엘레멘트에서 태그 변경 가능
- stypled.input.attrs({required:true}) attrs
  - 공통 attrs 갖는 태그 생성
- animations
  - keyframes
- pseudo selector
  - state selector
- theme
  - ThemeProvider 안에 있는 태그는 theme을 통해서 같은 컬러를 공유할 수 있게 된다

---
