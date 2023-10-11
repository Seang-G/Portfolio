import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import Intro from "./pages/Intro"
import Admin from "./pages/Admin"
import "./styles/dist/app.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
