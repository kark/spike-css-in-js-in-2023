import styled, { css } from "./styled";

const SECTION_WIDTH = 400;

const Section = styled.section`
  width: ${SECTION_WIDTH}px;
`;

const Bold = styled.strong`
  font-weight: bold;
`;

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 16px;
  text-align: center;

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      text-transform: ${({ color }) => {
        return color === "red" ? "uppercase" : "none";
      }};
    `}

  strong,
  span {
    color: #000;
    font-weight: normal;
  }

  ${Bold} {
    font-size: 20px;
  }
`;

function App() {
  return (
    <Section as="p">
      <Text color="red" active>
        Foo{" "}
        <strong>
          Foo <Bold>strong</Bold>
        </strong>
      </Text>
    </Section>
  );
}

export default App;
