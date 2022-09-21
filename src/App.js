import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Login from "./pages/login";
import Post from "./pages/post";
import Todo from "./pages/todo";
import { get_info_user } from "./redux/actions/user";
function App() {
  const [userLogged, setUserLogged] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(get_info_user(foundUser._id));
      setUserLogged(foundUser);
      console.log(foundUser);
    }
  }, []);

  return (
    <main>
      <Header user={userLogged} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </main>
  );
}

export default App;
