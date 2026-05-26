import React from "react";
import { useContext } from "react";
import { IndexDBFiles } from "./fileRepository";

export const FileRepositoryContext = React.createContext<IndexDBFiles | null>(
  null,
);

export const useFileRepository = (): IndexDBFiles => {
  const fileRepository = useContext(FileRepositoryContext);

  if (fileRepository === null) {
    throw new Error(
      "useFileRepository needs to be used with FileRepositoryContext.Provider",
    );
  }

  return fileRepository;
};
