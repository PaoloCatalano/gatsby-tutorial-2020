import styled from "styled-components"

export const ExampleButton = styled.button`
  background: darkgreen;
  color: orange;
  font-size: 2rem;
  border: none;
  outline: hidden;

  /* Created by Daniele Gaito */
  animation: mymove 1.75s infinite;
  border-radius: 10px 10px 10px 100px;

  @keyframes mymove {
    0% {
      border-radius: 10px 100px 0px 0px;
    }
    25% {
      border-radius: 100px 10px 0px 0px;
    }
    50% {
      border-radius: 10px 100px 0px 0px;
    }
    75% {
      border-radius: 100px 10px 0px 0px;
    }
    100% {
      border-radius: 10px 100px 0px 0px;
    }
  }
`
