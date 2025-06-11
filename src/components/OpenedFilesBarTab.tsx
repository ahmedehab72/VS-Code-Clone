import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/feature/fileTreeSlice";
interface IProps {
  file: IFile;
}
const OpenedFilesBarTab = ({ file }: IProps) => {
  // handle click
  const dispatch = useDispatch();
  const handleDisplayContent = () => {
    const { name, content } = file;
    dispatch(setClickedFileAction({ fileName: name, fileContent: content }));
  };
  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 `}
      onClick={handleDisplayContent}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
