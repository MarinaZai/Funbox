import { Container } from "@mui/system";
import "./App.css";
import { Header } from "./components/Header/Header";
import { MainPage } from "./MainPage/MainPage";

function App() {
  return (
    <div className="app-wrapper">
      <Header title={"Ты сегодня покормил кота?"} />
      <div className="app-container">
        <MainPage />
        <MainPage />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
