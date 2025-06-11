import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles , clickedFile} = useSelector((state: RootState) => state.treeSlice);

  return (
    <div className="w-full">
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
      >
        {openedFiles.map(file => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
        {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFilesBar;
