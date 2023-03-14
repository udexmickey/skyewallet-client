import { Route, Routes } from "react-router";
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
