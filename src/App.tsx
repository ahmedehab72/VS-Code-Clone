import "./App.css";
import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {

  return (
    <div className="m-1 flex h-full">
      <RecursiveComponent fileTree={fileTree} />
      <div className=" ml-32">
        <OpenedFilesBar />
      </div>
    </div>
  ); 
}

export default App;
