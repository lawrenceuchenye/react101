import "./App.css";
import { useFetch } from "./Hooks/";

const url = "github.com/user/repo/main/db.json";

const App = () => {
  const [isLoading, Data] = useFetch(url);
  console.log(Data);

  return (
    <div className="main-container">
      <div>{isLoading ? "laoding..." : "loaded"}</div>
    </div>
  );
};

export default App;
