import Droppable from "./components/Droppable/Droppable";
import "./App.css";
import styled from "styled-components";

import { getCompletion } from "./api/api";

function App() {
  const SubmitButton = styled.button`
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  `;

  return (
    <>
      <h1>Transcriptor</h1>
      <Droppable />
      <SubmitButton
        onClick={() => {
          getCompletion();
        }}
      >
        Transcrire
      </SubmitButton>
    </>
  );
}

export default App;
