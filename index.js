const Title = (props) => {
    return React.createElement("h1", {}, props.title);
  };
  const Button = (props) => {
    return <button onClick={() => alert("helloooo")}>{props.label}</button>;
  };
  
const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "React is running"),
      React.createElement(Title, { title: "React is awesome" }, null),
      React.createElement(Button, { label: "Hello" }, null),
    ]);
  };
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
