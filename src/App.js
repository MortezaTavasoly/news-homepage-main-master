import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import New from "./components/New";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Content />
          <New />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
