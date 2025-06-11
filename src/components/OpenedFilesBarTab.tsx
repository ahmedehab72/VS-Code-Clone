import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFileAction,
} from "../app/feature/fileTreeSlice";
import type { RootState } from "../app/store";
interface IProps {
  file: IFile;
}
const OpenedFilesBarTab = ({ file }: IProps) => {
  // handle click
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.treeSlice);

  const handleDisplayContent = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };
  const CloseFileTab = (id: string) => {
    const tabsAfterCloseOne = openedFiles.filter((file) => file.id !== id);
    // to make active on last tab when close tab
    const lastTab = tabsAfterCloseOne[tabsAfterCloseOne.length - 1];
    // if all tabs deleted this return undefined on last tab to fix this make this condition✔ or put ? before lastTab?.activeId
    if (!lastTab) {
      dispatch(setOpenedFileAction([]));
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    dispatch(setOpenedFileAction(tabsAfterCloseOne));
    dispatch(
      setClickedFileAction({
        activeTabId: lastTab.id,
        fileContent: lastTab.content,
        fileName: lastTab.name,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-2 border-t-3 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={handleDisplayContent}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          CloseFileTab(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
