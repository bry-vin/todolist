import List from "./components/List";
import InputBar from "./components/InputBar";

function App() {
  return (
    <div className="text-3xl">
        <div className="p-24 bg-cyan-50">
            <div className="bg-white rounded shadow h-full p-6">              
                <InputBar />
                <List />        
            </div>
        </div>
    </div>
  );
}

export default App;
