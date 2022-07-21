import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
