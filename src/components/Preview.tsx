import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import type { RootState } from "../app/store";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.treeSlice);

  return (
    <div>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent ?? ""} />
    </div>
  );
};

export default Preview;
