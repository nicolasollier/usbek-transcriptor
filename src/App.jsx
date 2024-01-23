import Droppable from './components/Droppable/Droppable'
import './App.css'
import styled from 'styled-components'

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
      <SubmitButton>Transcrire</SubmitButton>
    </>
  )
}

export default App
