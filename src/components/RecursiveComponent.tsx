import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFileAction } from "../app/feature/fileTreeSlice";
import type { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.treeSlice);
  
  // states 🙌
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleToggle = () => setIsOpen((prev) => !prev);

  // to prevent duplicate Opened file  (( file which already open when click again didn't execute))
  const onFileClicked = () => {
    const exist = doesFileObjectExist(openedFiles, id);
    if (exist) return;
    dispatch(setOpenedFileAction([...openedFiles, fileTree]));
  };
  return (
    <div className="ml-2 mb-3 cursor-pointer">
      <div className="flex item-center mb-1 ">
        {isFolder ? (
          <div className="flex items-center" onClick={handleToggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="flex items-center" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {/* recursive function to call again 📛 */}
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
