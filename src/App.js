import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Login from "./pages/login";
import Todo from "./pages/todo";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </main>
  );
}

export default App;
