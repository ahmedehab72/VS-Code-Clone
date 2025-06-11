import { extensionIconPaths } from "../constants";
import ImageIcon from "./ImageIcon";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extension = filename.split(".").pop();

  // ** refactoring **

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <ImageIcon src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <ImageIcon src="icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <ImageIcon src="icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;

/////////////////code without factoring ❌

// // file
//     if (extension === "tsx") return <ImageIcon src="icons/react_ts.svg" />;
//   if (extension === "jsx") return <ImageIcon src="icons/react.svg" />;
//   if (extension === "js") return <ImageIcon src="icons/javascript.svg" />;
//   if (extension === "ts") return <ImageIcon src="icons/typescript.svg" />;
//   if (extension === "html") return <ImageIcon src="icons/html.svg" />;

//   // ** folder
//   if (extension === "node_modules" && isFolder)
//     return isOpen ? (
//       <ImageIcon src="icons/folder-node-open.svg" />
//     ) : (
//       <ImageIcon src="icons/folder-node.svg" />
//     );
//   if (extension === "public" && isFolder)
//     return isOpen ? (
//       <ImageIcon src="icons/folder-public-open.svg" />
//     ) : (
//       <ImageIcon src="icons/folder-public.svg" />
//     );
//   if (extension === "src" && isFolder)
//     return isOpen ? (
//       <ImageIcon src="icons/folder-src-open.svg" />
//     ) : (
//       <ImageIcon src="icons/folder-src.svg" />
//     );
//   if (extension === "components" && isFolder)
//     return isOpen ? (
//       <ImageIcon src="icons/folder-components-open.svg" />
//     ) : (
//       <ImageIcon src="icons/folder-components.svg" />
//     );
