const Parent = ({ children }) => {
  return (
    <div
      style={{ padding: "30px", background: "#cf1733", borderRadius: "8px" }}
    >
      {children}
    </div>
  );
};

const Child = ({ id }) => {
  const alertId = (cid) => {
    console.log(`Child ${cid}`);
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#0de",
        borderRadius: "8px",
        margin: "10px",
      }}
      onClick={alertId(id)}
    ></div>
  );
};

const App = () => {
  return (
    <div>
      <Parent>
        <Child id={1} />
        <Child id={2} />
        <Child id={3} />
      </Parent>
    </div>
  );
};

export default App;
