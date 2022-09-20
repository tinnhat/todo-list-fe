import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Login from "./pages/login";
import Post from "./pages/post";
import Todo from "./pages/todo";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </main>
  );
}

export default App;
