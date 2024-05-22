import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/templates/HomePage";
import Layout from "./layouts/Layout";
import DetailsCoin from "./components/modules/DetailsCoin";
import PagenotFound from "./components/modules/404";
import Home from "./components/modules/Home";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coins" element={<HomePage />} />
          <Route path="/coins/:id" element={<DetailsCoin />} />
          <Route path="/*" element={<PagenotFound />} />
        </Routes>
      </Layout>
  );
}

export default App;
