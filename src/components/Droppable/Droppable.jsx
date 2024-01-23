import { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { FileContext } from "../../contexts/FileContext";

const DropZone = styled.div`
  border: 1px dashed #ccc;
  border-radius: 4px;
  padding: 10px 20px;
  text-align: center;
  transition: border 0.3s ease-in-out;
  cursor: pointer;

  &.drag-over {
    border-color: #009ffd;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Droppable = () => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const { file, setFile } = useContext(FileContext);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragOver) {
      setDragOver(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    processFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    processFiles(e.target.files);
  };

  const processFiles = (droppedFiles) => {
    if (droppedFiles && droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setFile(null);
  };

  return (
    <DropZone
      onClick={() => fileInputRef.current.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      className={dragOver ? "drag-over" : ""}
    >
      <FileInput
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        multiple={false}
      />
      {file ? (
        <FileList>
          <FileItem>
            {file.name}
            <DeleteButton onClick={handleDelete}>Supprimer</DeleteButton>
          </FileItem>
        </FileList>
      ) : (
        <p>Glissez un fichier audio ici ou cliquez pour télécharger</p>
      )}
    </DropZone>
  );
};

export default Droppable;
