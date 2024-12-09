import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/Layout/Layout";
import Home from "@/Pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
