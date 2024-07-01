import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
  background-color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.5em;
  color: green;
`;

const CardP = styled.p`
  margin: 0;
  font-size: 1em;
  color: #666;
`;

export default function Card() {
  return (
    <CardWrapper>
      <CardTitle>Homer Simpson</CardTitle>
      <CardP>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </CardP>
    </CardWrapper>
  );
}
