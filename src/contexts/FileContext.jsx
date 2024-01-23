import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};

FileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
