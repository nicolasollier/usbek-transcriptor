import { useContext } from "react";
import Droppable from "./components/Droppable/Droppable";
import styled from "styled-components";
import { getTranscription } from "./api/api";
import { FileContext } from "./contexts/FileContext";

function App() {
  const Card = styled.div`
    text-align: center;
    background-color: white;
    border-radius: 4px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;

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

  const { file } = useContext(FileContext);

  return (
    <Card>
      <h2>Transcrire mon audio</h2>
      <Droppable />
      <SubmitButton
        onClick={() => {
          getTranscription(file);
        }}
      >
        Transcrire
      </SubmitButton>
    </Card>
  );
}

export default App;
