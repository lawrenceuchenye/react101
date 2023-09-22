import "./App.css";
import "./Form.css";

const Form = () => {
  return (
    <div className="main-form-container">
      <form className="form-container">
        <div className="input-container">
          <label>Name:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
const App = () => {
  return (
    <div className="main-container">
      <Form />
    </div>
  );
};

export default App;
