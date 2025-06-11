import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";
// ...
interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFileAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});
export const { setOpenedFileAction, setClickedFileAction } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
