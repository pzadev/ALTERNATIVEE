import "../App.css";
import { Routes, Route } from "react-router-dom";
import Directory from "./Directory";
import Header from "./Header";
import Item from "./Item";
import About from "./About";
// import Error from "./Error";
import Submissions from "./Submissions";
import Faq from "./Faq";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-grow bg-white pt-[70px] p-4">
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/about" element={<About />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/:alternative" element={<Item />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
