import "./App.css";

function App() {
  return (
    <>
      <Todo title="Todo 1" description="Todo 1" done={false}></Todo>
    </>
  );
}

interface TodoProps {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
