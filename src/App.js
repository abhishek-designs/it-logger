import { useEffect } from "react";
import "./App.css";
import M from "materialize-css";
import Search from "./components/layout/Search";
import Logs from "./components/logs/Logs";
import Button from "./components/layout/Button";
import AddLogModal from "./components/layout/AddLogModal";
import TechModal from "./components/layout/TechModal";
import AddTechModal from "./components/layout/AddTechModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  // Auto initialize the js functionality to all the materialize components
  useEffect(() => {
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Search />
      <div className="container">
        <Logs />
        <Button />
        <AddLogModal />
        <TechModal />
        <AddTechModal />
      </div>
    </Provider>
  );
};

export default App;
