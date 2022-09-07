import { useState } from "react";
import reactLogo from "./assets/react.svg";
import MainLayout from "./component/mainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import "./App.css";
import NotFound from "./page/notFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/ertarn-inter" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
