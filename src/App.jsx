import "./Components/learn/todo/todo.css";
import Header from "./Components/layout/header";
import Footer from "./Components/layout/footer";
import { Outlet } from "react-router-dom";

const ParentComponent = () => {};

const ChildComponent = () => {};
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
