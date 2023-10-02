import "./App.css";
import { useFetch } from "./Hooks/";

const url = "github.com/user/repo/main/db.json";

const App = () => {
  const { loading, data } = useFetch(url);
  console.log(data);

  return (
    <div className="main-container">
      <div>
        <h1>{isLoading ? "laoding..." : "loaded"}</h1>
      </div>
    </div>
  );
};

export default App;
