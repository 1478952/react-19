import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TestUse from "./TestHooks/TestUse";
import TestRef from "./TestHooks/TestRef";
import TestTransition from "./TestHooks/TestTransition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-use" element={<TestUse />} />
        <Route path="/test-ref" element={<TestRef />} />
        <Route path="/test-transition" element={<TestTransition />} />
      </Routes>
      <hr />
      <Link to={"/"}>홈</Link>
    </BrowserRouter>
  );
}

export default App;
